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
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

const SignInDropDown = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  
  return (
    <div className="sign-in-dropdown">
      {isSignUp ? <SignUp onClose={onClose} /> : <SignIn onClose={onClose} />}
      <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-btn">
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default SignInDropDown;