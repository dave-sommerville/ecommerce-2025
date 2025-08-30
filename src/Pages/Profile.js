import { useAuth } from "../Controls/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../Style/partial-pages.css';

const Profile = () => {
  const { user, logout } = useAuth();
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
      <button className="btn" onClick={() => { logout(); navigate("/"); }}>
        Log Out
      </button>
      </div>
    </section>
  );
};

export default Profile;
