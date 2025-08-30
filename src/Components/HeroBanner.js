// src/Components/HeroBanner.jsx
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import { useProductContext } from '../Controls/ProductContext';
import '../Style/hero-banner.css';
import logo from '../Media/atlas-goods-logo.png';

export default function HeroBanner({ setHeroHeight }) {
  const { setSearch, categories, setCategory } = useProductContext();
  const bannerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (bannerRef.current) {
      setHeroHeight(bannerRef.current.offsetHeight);
    }
  }, [setHeroHeight]);

  const handleCategoryClick = (catSlug) => {
    setCategory(catSlug); // Set the category in the context
    navigate(`/products?category=${catSlug}`); // Navigate to the products page with the category query
  };

  return (
    <header ref={bannerRef} id="page-top" className="f-col no-select">
      <section className="hero-topper">
        <div className="flex container space-between">
          <p>Up to 70% off selected items</p>
          <div className="flex w-300px space-between">
            <p>Financial</p>
            <p>Our App</p>
            <p>FREE SHIPPING</p>
          </div>
        </div>
      </section>
      <section className="hero-search-bar">
        <SearchBar onSearch={setSearch} />
      </section>
      <section className="title-section">
        <div className="flex">
          <img className="hero-logo" src={logo}></img>
          <h1>Altas Goods</h1>
        </div>
      <h2>Anything. Anywhere.</h2>
      </section>
      <section className="marquee-container">
        <div className="marquee">
          {/* First instance of the content */}
          {categories.length > 0 ? (
            categories.map(cat => (
              <button key={cat.slug} className="btn" onClick={() => handleCategoryClick(cat.slug)}>
                {cat.name}
              </button>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
          {/* Second, duplicated instance of the content */}
          {categories.length > 0 &&
            categories.map((cat, index) => (
              <button key={`${cat.slug}-dup-${index}`} className="btn" onClick={() => handleCategoryClick(cat.slug)}>
                {cat.name}
              </button>
            ))}
        </div>
      </section>
    </header>
  );
}