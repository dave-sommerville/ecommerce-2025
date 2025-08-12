import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(input);
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
