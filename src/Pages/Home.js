// src/Pages/Home.jsx
import React from 'react';
import ProductList from '../Components/ProductList';

export default function Home() {
  return (
    <div className="home-page">
      <section>
        <h2>Electronics</h2>
        <ProductList initialCategory="beauty" />
      </section>

      <section>
        <h2>Featured Sales</h2>
        <ProductList sales={true} />
      </section>
    </div>
  );
}