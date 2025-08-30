// src/Controls/FavoritesContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  // Load user's favorites from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedFavorites = localStorage.getItem(`favorites_${user.email}`);
      setFavorites(savedFavorites ? JSON.parse(savedFavorites) : []);
    } else {
      setFavorites([]); // clear when logged out
    }
  }, [user]);

  // Save favorites to that user's storage whenever the favorites list changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
    }
  }, [favorites, user]);

  const toggleFavorite = (product) => {
    setFavorites((prev) => {
      const isProductInFavorites = prev.some((item) => item.id === product.id);
      if (isProductInFavorites) {
        // Remove product
        return prev.filter((item) => item.id !== product.id);
      } else {
        // Add product
        return [...prev, product];
      }
    });
  };

  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);