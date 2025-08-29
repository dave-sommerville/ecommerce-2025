// src/Components/FloatingHeader.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/floating-header.css';
import SearchBar from './SearchBar';
import { useProductContext } from '../Controls/ProductContext';
import logo from '../Media/atlas-goods-logo.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


function FloatingHeader({ showImmediately = false, heroHeight = 0 }) {
  const navRef = useRef(null);
  const [isVisible, setIsVisible] = useState(showImmediately);
  const { setSearch } = useProductContext();

  useEffect(() => {
    if (showImmediately) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showImmediately, heroHeight]);

  return (
    <nav ref={navRef} className={`no-select floating-nav ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container container">
        <div className="logo-title">

          <Link to="/">
            <img className="header-logo" src={logo}></img>
          </Link>
          <h3 className="header-title">Atlas Goods</h3>
        </div>
        <SearchBar onSearch={setSearch}></SearchBar>
        <div className="btn-wrapper">
          <FaShoppingCart></FaShoppingCart>
          <FaUser></FaUser>
        </div>
      </div>
    </nav>
  );
}

export default FloatingHeader;