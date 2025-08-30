// src/Controls/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on start
  useEffect(() => {
    const storedUser = localStorage.getItem("demoUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Update the signup function to accept all new fields
  const signup = ({ firstName, lastName, username, email, password, bio, favoriteProgram }) => {
    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password, // Note: For a real app, never store passwords this way
      bio: bio || "",
      favoriteProgram: favoriteProgram || "",
    };
    localStorage.setItem("demoUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email, password) => {
    const storedUser = localStorage.getItem("demoUser");
    if (!storedUser) {
      throw new Error("No account found. Please sign up first.");
    }
    const storedUserData = JSON.parse(storedUser);
    if (storedUserData.email === email && storedUserData.password === password) {
      setUser(storedUserData);
    } else {
      throw new Error("Invalid email or password.");
    }
  };

  // New function to update user profile
  const editProfile = (updatedFields) => {
    setUser(prevUser => {
      const updatedUser = { ...prevUser, ...updatedFields };
      localStorage.setItem("demoUser", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  // New function to delete the user account
  const deleteAccount = () => {
    localStorage.removeItem("demoUser");
    setUser(null);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, editProfile, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);