import React, { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsLoggedIn(true);
        console.log('decoded',decoded);
        
        setUser(decoded); // fallback if name missing
      } catch {
        console.log("Invalid token");
        localStorage.removeItem("authToken");
      }
    }
    else{
      setIsLoggedIn(false);
      setUser(null);
    }
  });

  const updateAuthStatus = (loggedIn, userInfo = null) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, updateAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
