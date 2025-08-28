// src/Components/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, isSale }) {
const cardClasses = `product-card ${isSale ? 'sales-card' : ''}`;

return (
  <Link to={`/product/${product.id}`} className={cardClasses}>
    <img src={product.thumbnail} alt={product.name} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
  </Link>
  );
}