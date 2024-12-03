import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a token in localStorage on initial load
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true); // User is authenticated
    } else {
      setUser(null); // User is not authenticated
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser(true); // Set user as authenticated
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null); // Set user as not authenticated
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
