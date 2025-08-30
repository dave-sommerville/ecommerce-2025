// src/AppRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState} from 'react';
import PageLayout from '../Layout/PageLayout';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import ProductsPage from '../Pages/ProductsPage';
import ShoppingCart from '../Pages/ShoppingCart';
import Profile from '../Pages/Profile';
import SignUpPage from '../Pages/SignUpPage'; // New import for the dedicated sign-up page
import SignInPage from '../Pages/SignInPage'; // New import for the dedicated sign-in page
import EditProfilePage from '../Pages/EditProfilePage'; // New import for the profile editing page

export default function AppRoutes() {
  const location = useLocation();
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    if (scrollReady) {
      window.scrollTo(0, 0);
      setScrollReady(false);
    }
  }, [scrollReady]);

  return (
    <AnimatePresence 
      mode="wait" 
      initial={false}
      onExitComplete={() => setScrollReady(true)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/products" element={<PageLayout><ProductsPage></ProductsPage></PageLayout>}></Route>
        <Route path="/product/:id" element={<PageLayout><ProductDetails /></PageLayout>} />
        <Route path="/cart" element={<PageLayout><ShoppingCart></ShoppingCart></PageLayout>}></Route>
        
        {/* New and updated routes for authentication and profile management */}
        <Route path="/signup" element={<PageLayout><SignUpPage></SignUpPage></PageLayout>}></Route>
        <Route path="/signin" element={<PageLayout><SignInPage></SignInPage></PageLayout>}></Route>
        <Route path="/profile" element={<PageLayout><Profile></Profile></PageLayout>}></Route>
        <Route path="/edit-profile" element={<PageLayout><EditProfilePage></EditProfilePage></PageLayout>}></Route>
        
        <Route path="*" element={<PageLayout><NotFound></NotFound></PageLayout>}></Route>
      </Routes>
    </AnimatePresence>
  );
}