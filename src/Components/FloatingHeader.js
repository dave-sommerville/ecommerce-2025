// src/Components/FloatingHeader.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '../Controls/AuthContext';
import '../Style/floating-header.css';
import logo from '../Media/atlas-goods-logo.png';
import { useProductContext } from '../Controls/ProductContext';
import SearchBar from './SearchBar';


function FloatingHeader({ showImmediately = false, heroHeight = 0 }) {
  const navRef = useRef(null);
  const [isVisible, setIsVisible] = useState(showImmediately);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
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


  const handleUserClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/signin');
    }
  };

  const handleLogout = () => {
    logout();
    // This is the updated navigation for logout
    navigate("/signup"); 
  };

  return (
    <nav ref={navRef} className={`no-select floating-nav ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="flex">
          <img src={logo} className="header-logo"></img>
          <h3 className="header-title">Atlas Goods</h3>
        </Link>
        <SearchBar onSearch={setSearch} />
        <div className="icon-wrapper">
          <Link to="/cart" className='pointer'>
            <FaShoppingCart />
          </Link>
          <FaUser className="pointer" onClick={handleUserClick}/>
        </div>
      </div>
    </nav>
  );
}

export default FloatingHeader;