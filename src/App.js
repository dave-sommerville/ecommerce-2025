// App.jsx
import './css/index.css';
import './css/roots.css';
import './css/reset.css';
import AppRoutes from './BLL/Routes';
import ScrollToTop from './Controls/ScrollToTop';

function App() {
  return(
    <>
      <ScrollToTop></ScrollToTop>
      <AppRoutes />
    </>
  );
}

export default App;
