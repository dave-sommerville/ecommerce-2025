import { useCart } from "../Controls/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="50" />
          <span>{item.title} (x{item.quantity})</span>
          <span>${item.price * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
