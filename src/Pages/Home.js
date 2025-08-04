import SplashPageFeature from "../Components/SplashPage/SplashPageFeature";
import { motion } from 'framer-motion';
import '../css/pages/splash-page.css';
function Home() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <SplashPageFeature/>
    </motion.div>
  );
}
export default Home;