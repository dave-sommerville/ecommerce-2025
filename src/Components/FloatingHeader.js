import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/common/floating-header.css';

function FloatingHeader({ showImmediately = false, heroHeight = 0 }) {
  const navRef = useRef(null);
  const [isVisible, setIsVisible] = useState(showImmediately);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="nav-container">
        <h3 className="header-title"><span class="logo-hex">&nbsp;DS </span>CODE</h3>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" exact="true" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Story</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink></li>
          <li><NavLink to="/playground" className={({ isActive }) => isActive ? 'active' : ''}>Play</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default FloatingHeader;
