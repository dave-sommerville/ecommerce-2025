import { useCart } from "../Controls/CartContext";
import '../Style/partial-pages.css';


const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <section className="shopping-cart">
      <div className="cart-card">
        <h2>Your Cart</h2>
        {cart.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} width="50" />
            <span>{item.title} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
            <button className="btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <button className="btn secondary" onClick={clearCart}>Clear Cart</button>
      </div>
    </section>
  );
};

export default CartPage;
