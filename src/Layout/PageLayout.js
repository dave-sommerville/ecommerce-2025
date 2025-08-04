import { useState } from 'react';
import HeroBanner from '../Components/SplashPage/HeroBanner';
import FloatingHeader from '../Components/PageWide/FloatingHeader';
import Footer from '../Components/PageWide/Footer';
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
      <main>{children}</main>
      <Footer />
    </>
  );
}
