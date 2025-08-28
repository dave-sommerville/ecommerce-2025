// src/Controls/SearchBar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(input);
    if (input.trim()) {
      navigate(`/products?search=${encodeURIComponent(input)}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button className="btn" type="submit">Search</button>
    </form>
  );
}