// App.jsx
import './Style/index.css';
import './Style/roots.css';
import './Style/reset.css';
import AppRoutes from './Controls/Routes';
import ScrollToTop from './Controls/ScrollToTop';
import { CartProvider } from './Controls/CartContext';
import { AuthProvider } from './Controls/AuthContext';
import { FavoritesProvider } from './Controls/FavoritesContext'; // New import

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Wrap your components with FavoritesProvider */}
        <FavoritesProvider>
          <ScrollToTop></ScrollToTop>
          <AppRoutes />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;