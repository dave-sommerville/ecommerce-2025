// src/AppRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState} from 'react';
import PageLayout from '../Layout/PageLayout';
import NotFound from '../Pages/NotFound';
import ProductDetails from '../Pages/ProductDetails';
import Home from '../Pages/Home';
import ShoppingCart from '../Pages/ShoppingCart';
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';
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
        <Route path="/product/:id" element={<PageLayout><ProductDetails /></PageLayout>} />
        <Route path="/cart" element={<PageLayout><ShoppingCart></ShoppingCart></PageLayout>}></Route>
        <Route path="/signup" element={<PageLayout><SignUp></SignUp></PageLayout>}></Route>
        <Route path="/profile" element={<PageLayout><Profile></Profile></PageLayout>}></Route>
        <Route path="*" element={<PageLayout><NotFound></NotFound></PageLayout>}></Route>
      </Routes>
    </AnimatePresence>
  );
}