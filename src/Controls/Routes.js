// BLL/Routes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState} from 'react';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';
import PageLayout from '../Layouts/PageLayout';
import About from '../Pages/About';
import PlayGround from '../Pages/PlayGround';
import Releases from '../Pages/Releases';
import Collaborators from '../Pages/Collaborators';
import SomethingElse from '../Pages/SomethingElse';
import NotFound from '../Pages/NotFound';

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
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/portfolio" element={<PageLayout><Portfolio /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
        <Route path="/playground" element={<PageLayout><PlayGround /></PageLayout>} />
        <Route path="/releases" element={<PageLayout><Releases /></PageLayout>} />
        <Route path="/collaborators" element={<PageLayout><Collaborators /></PageLayout>} />
        <Route path="/something-else" element={<PageLayout><SomethingElse></SomethingElse></PageLayout>} />
        <Route path="*" element={<PageLayout><NotFound></NotFound></PageLayout>}></Route>
      </Routes>
    </AnimatePresence>
  );
}
