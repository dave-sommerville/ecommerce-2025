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
    localStorage.removeItem("demoUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
