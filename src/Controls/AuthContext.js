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

  const signup = (name, email, password) => {
    const newUser = { name, email };
    localStorage.setItem("demoUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email, password) => {
    // In a real system, you'd check credentials
    // Here, we just load whatever was stored during signup
    const storedUser = localStorage.getItem("demoUser");
    if (!storedUser) {
      throw new Error("No account found. Please sign up first.");
    }
    setUser(JSON.parse(storedUser));
  };

const logout = () => {
    // We keep the user data in localStorage so they can sign back in later
    // localStorage.removeItem("demoUser"); // Remove this line
    setUser(null); // This clears the user from the app's state
};

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
