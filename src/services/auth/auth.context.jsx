import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const onLogin = () => {
    // Simulate login logic
    setUser({ id: 1, name: "John Doe" });
    setIsAuthenticated(true);
    setLoading(false);
  };
  const onLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;