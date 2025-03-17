import React, { createContext, useState, useEffect } from "react";
import { onLoginWithCredentials } from "./auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user from local storage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Save user data to local storage on login
  const onLogin = () => {
    const userData = { id: 1, name: "John Doe" };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    setLoading(false);
  };

  // Clear local storage on logout
  const onLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);
  };
  // Login with username & password
  const onLoginWithUsernameAndPassword = async (username, password) => {
    setLoading(true);
    try {
      const user = await onLoginWithCredentials(username, password);
      setUser(user);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setIsAuthenticated(true);
    }
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        onLogin,
        onLogout,
        onLoginWithUsernameAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
