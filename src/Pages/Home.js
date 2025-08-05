import { motion } from 'framer-motion';
import '../Style/hero-banner.css';

function Home() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
    </motion.div>
  );
}
export default Home;