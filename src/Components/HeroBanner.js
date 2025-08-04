import React, { useEffect, useRef, useState } from 'react';
import honeyComb from '../../media/img/honeycomb.svg';
import { Link } from 'react-router-dom';
const parallaxLayers = [
  { className: 'large-orange-hex', speed: 0.4 },
  { className: 'med-orange-hex-one', speed: 0.6 },
  { className: 'med-orange-hex-two', speed: 0.1 },
  { className: 'med-dark-hex', speed: 0.5 },
  { className: 'small-solid-orange-hex-one', speed: 2 },
  { className: 'small-solid-orange-hex-two', speed: -0.8 },
  { className: 'large-dark-blur-hex', speed: 1.8 }
];

export default function HeroBanner({ setHeroHeight }) {
  const bannerRef = useRef(null);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      parallaxLayers.forEach(({ className, speed }) => {
        const layer = document.querySelector(`.${className}`);
        if (layer) {
          const yPos = -(scrollTop * speed);
          layer.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <header ref={bannerRef} id="page-top" className="f-col no-select">
      <img src={honeyComb} className="hero-banner" alt="hero background" />
      <h1 className="z100"><span>D</span>AVE <span>S</span>OMMERVILLE</h1>
      <h2 className="z100">CODE</h2>
      <h3 className="z100">
        Writing Thoughts into Reality
        <span className={`cursor ${cursorVisible ? 'visible' : ''}`}>|</span>
      </h3>

      {parallaxLayers.map(({ className }) => (
        <div key={className} className={`parallax ${className} z${className.includes('dark') ? 7 : 4}`}></div>
      ))}

      <div className="btn-wrapper f-col center">
        <Link to="/portfolio" className="btn">Portfolio</Link>
        <Link to="/contact" className="btn secondary">Say Hi</Link>
      </div>
    </header>
  );
}
