// Auth context
import { createContext, useState, useEffect } from "react";
import { isAuthenticated } from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); 
  // null = checking auth
  // true = logged in
  // false = not logged in

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      setIsAuth(authStatus);
    };

    checkAuth();
  }, []);

  // Prevent app rendering before auth check completes
  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
