import { useState } from 'react';
import HeroBanner from '../Components/HeroBanner';
import FloatingHeader from '../Components/FloatingHeader';
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import UsePageTitle from '../Controls/UsePageTitle';

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [heroHeight, setHeroHeight] = useState(0);

  return (
    <>
      <UsePageTitle />
      {isHome && <HeroBanner setHeroHeight={setHeroHeight} />}
      <FloatingHeader showImmediately={!isHome} heroHeight={heroHeight} />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
