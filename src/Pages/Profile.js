import { useAuth } from "../Controls/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button onClick={() => { logout(); navigate("/"); }}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
