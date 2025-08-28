import { motion } from 'framer-motion';
import '../Style/hero-banner.css';
import ProductList from '../Components/ProductList';
import SignIn from '../Components/SignIn';
import SignUp from './SignUp';

function Home() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <SignIn></SignIn>
      <ProductList />
    </motion.div>
  );
}
export default Home;