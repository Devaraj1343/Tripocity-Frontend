import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'; // ✅ Correct


const AuthContext = createContext();

export  const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email, role, ... }
  const [loading, setLoading] = useState(true);

  // Auto-login on page load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); // ✅ Set user globally
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("authToken");
      }
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("authToken", token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy use
export const useAuth = () => useContext(AuthContext);
