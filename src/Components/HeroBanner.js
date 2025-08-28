// src/Components/HeroBanner.jsx
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { useProductContext } from '../Controls/ProductContext';

export default function HeroBanner({ setHeroHeight }) {
  const { setSearch, categories, setCategory } = useProductContext();
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) {
      setHeroHeight(bannerRef.current.offsetHeight);
    }
  }, [setHeroHeight]);

  return (
    <header ref={bannerRef} id="page-top" className="f-col no-select">
      <h1>Altas Goods</h1>
      <h2>Anything. Anywhere.</h2>
      <Link to="/portfolio" className="btn">Portfolio</Link>
      <a href="mailto:dave.r.sommerville@outlook.com" className="btn secondary">Say Hi</a>
      <SearchBar onSearch={setSearch} />

      <nav className="category-links">
        {categories.length > 0 ? (
          categories.map(cat => (
            <button key={cat.slug} className="btn" onClick={() => setCategory(cat.slug)}>
              {cat.name}
            </button>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </nav>

    </header>
  );
}