// BLL/Routes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState} from 'react';
import Home from '../Pages/Home';
import PageLayout from '../Layout/PageLayout';
import NotFound from '../Pages/NotFound';
import ProductDetails from '../Pages/ProductDetails';
import ProductList from '../Components/ProductList';
export default function AppRoutes() {
  const location = useLocation();
    const [scrollReady, setScrollReady] = useState(false);

  // Ensure scroll happens only once, after exit
  useEffect(() => {
    if (scrollReady) {
      window.scrollTo(0, 0);
      setScrollReady(false); // reset for next transition
    }
  }, [scrollReady]);
  return (
    <AnimatePresence 
      mode="wait" 
      initial={false}
      onExitComplete={() => setScrollReady(true)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><ProductList /></PageLayout>} />
        <Route path="/product/:id" element={<PageLayout><ProductDetails /></PageLayout>} />
        <Route path="*" element={<PageLayout><NotFound></NotFound></PageLayout>}></Route>
      </Routes>
    </AnimatePresence>
  );
}
