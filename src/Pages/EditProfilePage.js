// src/Pages/EditProfilePage.jsx
import { useState } from "react";
import { useAuth } from "../Controls/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import '../Style/partial-pages.css';

const EditProfilePage = () => {
  const { user, editProfile } = useAuth();
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    bio: user.bio,
    favoriteProgram: user.favoriteProgram,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile(formData);
    navigate("/profile");
  };

  return (
    <section className="edit-profile-page">
      <div className="edit-profile-card">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <textarea name="bio" placeholder="Bio (Optional)" value={formData.bio} onChange={handleChange}></textarea>
          <input type="text" name="favoriteProgram" placeholder="Favorite Computer Program (Optional)" value={formData.favoriteProgram} onChange={handleChange} />
          
          <div className="button-group">
            <button type="submit" className="btn">Save Changes</button>
            <Link to="/profile" className="btn secondary">Cancel</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProfilePage;