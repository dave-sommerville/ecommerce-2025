// src/Components/ProductCard.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Controls/AuthContext';
import { useCart } from '../Controls/CartContext';
import { useFavorites } from '../Controls/FavoritesContext';
import { useState } from 'react';

// Import the Font Awesome icons from react-icons
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function ProductCard({ product, isSale }) {
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const cardClasses = `product-card ${isSale ? 'sales-card' : ''}`;
  const isCurrentlyFavorite = isFavorite(product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
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
        {/* Use the imported components directly */}
        {isCurrentlyFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Shopping cart quantity controls */}
      <div className="flex w-100 space-between align-center">
        <div className="quantity-adjuster">
          <button className="btn small" onClick={(e) => { e.preventDefault(); setQuantity(prev => prev + 1); }}>+</button>
          <button className="btn small" onClick={(e) => { e.preventDefault(); setQuantity(prev => Math.max(1, prev - 1)); }}>-</button>
        </div>
        <span>{quantity}</span>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}