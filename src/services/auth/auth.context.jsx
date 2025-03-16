import React, { createContext, useState } from "react";
import { onLoginWithCredentials } from "./auth.service";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

 const  onLoginWithUsernameAndPassword = async (username , password) => {
     setLoading(true);
     try{
      const user = await onLoginWithCredentials(username, password);
    setUser(user);
    setIsAuthenticated(true);
    setLoading(false);
     }catch(e){
      setLoading(false);
      setError(e);
      console.log("Failed to login", e);
     }
     
    

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
        onLoginWithUsernameAndPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;