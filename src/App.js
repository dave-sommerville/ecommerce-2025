// App.jsx
import './Style/index.css';
import './Style/roots.css';
import './Style/reset.css';
import AppRoutes from './Controls/Routes';
import ScrollToTop from './Controls/ScrollToTop';
import { CartProvider }from './Controls/CartContext';

function App() {
  return(
    <>
      <CartProvider>
        <ScrollToTop></ScrollToTop>
        <AppRoutes />
      </CartProvider>
    </>
  );
}

export default App;
