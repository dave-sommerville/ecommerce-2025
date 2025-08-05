// App.jsx
import './Style/index.css';
import './Style/roots.css';
import './Style/reset.css';
import AppRoutes from './Controls/Routes';
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
