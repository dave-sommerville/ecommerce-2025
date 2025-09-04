// src/Pages/SignInPage.jsx
import { useState } from "react";
import { useAuth } from "../Controls/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import '../Style/partial-pages.css';

const SignInPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="sign-in-page">
      <div className="sign-in-card">
        {location.state?.message && <p className="message">{location.state.message}</p>}
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="f-col h-150px space-between">
          <input className="input-field" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input className="input-field" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="btn">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default SignInPage;