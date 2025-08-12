import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export default function HeroBanner({ setHeroHeight }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (bannerRef.current) {
        setHeroHeight(bannerRef.current.offsetHeight);
      }
    };

    updateHeight(); // on mount
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [setHeroHeight]);

  return (
    <header ref={bannerRef} id="page-top" className="f-col no-select">
      <h1>Altas Goods</h1>
      <h2>Anything. Anywhere.</h2>
      <Link to="/portfolio" className="btn">Portfolio</Link>
      <a href="mailto:dave.r.sommerville@outlook.com" className="btn secondary">Say Hi</a>
    </header>
  );
}
