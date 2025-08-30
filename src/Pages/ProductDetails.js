// src/Pages/ProductDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useEffect, useState } from 'react';
import { fetchProductById } from '../Controls/api';
import { useCart } from '../Controls/CartContext';
import { useAuth } from '../Controls/AuthContext'; // Import useAuth
import { useFavorites } from '../Controls/FavoritesContext'; // Import useFavorites

export default function ProductDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;
  
  const isCurrentlyFavorite = isFavorite(product.id);

  const handleFavoriteClick = () => {
    if (!user) {
      navigate('/signin', { state: { message: 'Please sign in to add to favorites!' } });
      return;
    }
    toggleFavorite(product);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <section className="details-section blur-bg">
      <div className="details-card container">
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} style={{ width: '300px' }} />
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        
        {/* Favorite button */}
        <button 
          className={`favorite-btn ${isCurrentlyFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <span role="img" aria-label="favorite">
            {isCurrentlyFavorite ? '❤️' : '🤍'}
          </span>
          {isCurrentlyFavorite ? " Remove from Favorites" : " Add to Favorites"}
        </button>

        {/* Quantity selector */}
        <div className="quantity-selector">
          <label htmlFor="quantity-input">Quantity:</label>
          <input 
            id="quantity-input" 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            min="1"
            className="quantity-input"
          />
        </div>
        
        <button className="btn" onClick={handleAddToCart}>
          Add to Shopping Cart
        </button>
        <Link className="underline" to="/">Return Home</Link>
      </div>
    </section>
  );
}