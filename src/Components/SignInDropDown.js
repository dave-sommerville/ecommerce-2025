import React, { useState } from 'react';
import { useAuth } from '../Controls/AuthContext';
import { useNavigate } from 'react-router-dom';
import SignIn from './SignIn'; // Import your existing SignIn component

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(name, email, password);
      onClose(); // Call onClose after a successful signup
      navigate('/profile');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <input
        className="input-field"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="input-field"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn">Sign Up</button>
    </form>
  );
};

const SignInDropDown = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  return (
    <div className="sign-in-dropdown">
      {isSignUp ? <SignUp onClose={onClose} /> : <SignIn onClose={onClose} />}
      <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-btn btn secondary">
        {isSignUp ? ' or Login' : " or Sign Up"}
      </button>
    </div>
  );
};

export default SignInDropDown;