// src/Layout/PageLayout.jsx
import HeroBanner from '../Components/HeroBanner';
import FloatingHeader from '../Components/FloatingHeader';
import Footer from '../Components/Footer';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UsePageTitle from '../Controls/UsePageTitle';

import { ProductContext } from '../Controls/ProductContext';

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [heroHeight, setHeroHeight] = useState(0);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  return (
    <ProductContext.Provider value={{ search, setSearch, category, setCategory, categories, setCategories }}>
      <UsePageTitle />
      {isHome && (
        <HeroBanner
          setHeroHeight={setHeroHeight}
        />
      )}
      <FloatingHeader
        showImmediately={!isHome}
        heroHeight={heroHeight}
      />
      <main className="container">{children}</main>
      <Footer />
    </ProductContext.Provider>
  );
}