import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '../Controls/AuthContext';
import SignInDropDown from './SignInDropDown';
import '../Style/floating-header.css';
import logo from '../Media/atlas-goods-logo.png';
import { useProductContext } from '../Controls/ProductContext';
import SearchBar from './SearchBar';


function FloatingHeader({ showImmediately = false, heroHeight = 0 }) {
  const navRef = useRef(null);
  const userBtnRef = useRef(null);
  const [isVisible, setIsVisible] = useState(showImmediately);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userBtnRef.current &&
        !userBtnRef.current.contains(event.target) &&
        !event.target.closest('.sign-in-dropdown')
      ) {
        setShowSignIn(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      setShowSignIn(!showSignIn);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setShowSignIn(false);
  };

  const handleDropdownClose = () => {
    setShowSignIn(false);
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
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <div className="user-btn-container" ref={userBtnRef}>
            <FaUser onClick={handleUserClick} style={{ cursor: 'pointer' }} />
            {showSignIn && <SignInDropDown onClose={handleDropdownClose} />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default FloatingHeader;