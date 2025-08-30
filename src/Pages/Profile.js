// src/Pages/Profile.jsx
import { useAuth } from "../Controls/AuthContext";
import { useFavorites } from "../Controls/FavoritesContext";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import '../Style/partial-pages.css';

const Profile = () => {
  const { user, logout, deleteAccount } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signup"); // Redirect to sign-up if not logged in
  }, [user, navigate]);

  if (!user) return null;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account? This cannot be undone.")) {
      deleteAccount();
      navigate("/signup"); // Redirect to sign-up page after deletion
    }
  };

  return (
    <section className="profile">
      <div className="profile-card">
        <h2>Your Profile</h2>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio || 'Not specified'}</p>
        <p><strong>Favorite Program:</strong> {user.favoriteProgram || 'Not specified'}</p>
        
        {/* Buttons for Edit and Delete */}
        <div className="profile-actions">
          <Link to="/edit-profile" className="btn secondary">Edit Profile</Link>
          <button className="btn danger" onClick={handleDelete}>Delete Account</button>
        </div>
        
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
        
        <button className="btn" onClick={() => { logout(); navigate("/signup"); }}>
          Log Out
        </button>
      </div>
    </section>
  );
};

export default Profile;