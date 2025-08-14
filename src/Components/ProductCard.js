import { Link } from 'react-router-dom';
import { useCart } from '../Controls/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link className="btn" to={`/product/${product.id}`}>View Details</Link>
      <button className="btn secondary" onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
}
