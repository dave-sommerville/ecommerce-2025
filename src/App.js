// App.jsx
import './Style/index.css';
import './Style/roots.css';
import './Style/reset.css';
import AppRoutes from './Controls/Routes';
import ScrollToTop from './Controls/ScrollToTop';
import { CartProvider }from './Controls/CartContext';
import { AuthProvider } from './Controls/AuthContext';

function App() {
  return(
    <AuthProvider>
      <CartProvider>
        <ScrollToTop></ScrollToTop>
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
