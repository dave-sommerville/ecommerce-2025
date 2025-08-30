// src/Pages/Home.jsx
import React from 'react';
import ProductList from '../Components/ProductList';
import bannerAd from '../Media/banner-ad.jpg';

export default function Home() {
  return (
    <div className="home-page">
      <section className="container">
        <ProductList initialCategory="beauty" sectionTitle="Beauty Products"/>
      </section>
      <section className="banner-section">
        <div className="container">
          <img src={bannerAd}></img>
        </div>
      </section>
      <section className="container">
        <ProductList sales={true} sectionTitle="Featured Sales"/>
      </section>
    </div>
  );
}