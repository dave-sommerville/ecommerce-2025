import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../Controls/api';
import { useCart } from '../Controls/CartContext';
export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section className="details-section blur-bg">
      <div className="details-card">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button className="btn" conClick={() => addToCart(product)}>Add to Shopping Cart</button>
      </div>
    </section>
  );
}
