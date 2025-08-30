// src/Pages/Profile.jsx
import { useAuth } from "../Controls/AuthContext";
import { useFavorites } from "../Controls/FavoritesContext"; // Import useFavorites
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../Style/partial-pages.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const { favorites } = useFavorites(); // Get favorites
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <section className="profile">
      <div className="profile-card">
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
        
        {/* Displaying Favorites */}
        <div className="favorites-list">
          <h3>Your Favorites ({favorites.length})</h3>
          {favorites.length > 0 ? (
            <ul>
              {favorites.map((product) => (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.title} style={{ width: '50px' }} />
                  <span>{product.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>You have no favorite products yet.</p>
          )}
        </div>
        
        <button className="btn" onClick={() => { logout(); navigate("/"); }}>
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Profile;