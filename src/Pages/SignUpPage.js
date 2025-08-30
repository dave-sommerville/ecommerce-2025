// src/Pages/SignUpPage.jsx
import { useState } from "react";
import { useAuth } from "../Controls/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import '../Style/partial-pages.css';

const SignUpPage = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    favoriteProgram: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    signup(formData);
    navigate("/profile");
  };

  return (
    <section className="sign-up-page">
      <div className="sign-up-card">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Required Fields */}
          <input className="input-field" type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input className="input-field" type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <input className="input-field" type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input className="input-field" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="input-field" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input className="input-field" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

          {/* Optional Fields */}
          <textarea name="bio" placeholder="Bio (Optional)" onChange={handleChange}></textarea>
          <input className="input-field" type="text" name="favoriteProgram" placeholder="Favorite Computer Program (Optional)" onChange={handleChange} />

          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;