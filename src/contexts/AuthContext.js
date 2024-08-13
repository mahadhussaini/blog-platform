// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from "react";

// @ts-ignore
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Logic to log in and set user
    setUser(userData);
  };

  const logout = () => {
    // Logic to log out
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext; // Ensure AuthContext is exported
