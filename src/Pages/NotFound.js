import { Link } from 'react-router-dom';
import '../Style/partial-pages.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <h2>404</h2>
        <p>Sorry, we couldn't find that page.</p>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}
export default NotFound;