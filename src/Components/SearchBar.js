import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
