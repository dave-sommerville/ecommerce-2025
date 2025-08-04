import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Sorry, we couldn't find that page.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
export default NotFound;