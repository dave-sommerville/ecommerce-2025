// src/Components/ProductCard.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../Controls/AuthContext'; // Import useAuth
import { useCart } from '../Controls/CartContext'; // Import useCart
import { useFavorites } from '../Controls/FavoritesContext'; // Import useFavorites
import { useState } from 'react';

export default function ProductCard({ product, isSale }) {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const cardClasses = `product-card ${isSale ? 'sales-card' : ''}`;
  const isCurrentlyFavorite = isFavorite(product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevents the Link from navigating
    if (!user) {
      navigate('/signin', { state: { message: 'Please sign in to add to favorites!' } });
      return;
    }
    toggleFavorite(product);
  };
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, quantity);
  };

  return (
    <div className={cardClasses}>
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.name} />
        <h3 className="text-center">{product.title}</h3>
        <p>${product.price}</p>
      </Link>
      <button 
        className={`favorite-btn ${isCurrentlyFavorite ? 'active' : ''}`}
        onClick={handleFavoriteClick}
      >
        <span role="img" aria-label="favorite">
          {isCurrentlyFavorite ? '❤️' : '🤍'}
        </span>
      </button>

      {/* Shopping cart quantity controls */}
      <div className="cart-controls">
        <div className="quantity-adjuster">
          <button className="btn btn-sm" onClick={(e) => { e.preventDefault(); setQuantity(prev => Math.max(1, prev - 1)); }}>-</button>
          <span>{quantity}</span>
          <button className="btn btn-sm" onClick={(e) => { e.preventDefault(); setQuantity(prev => prev + 1); }}>+</button>
        </div>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}