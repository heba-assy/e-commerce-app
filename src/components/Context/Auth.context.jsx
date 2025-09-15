import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../../services/auth-service";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await verifyToken();
        console.log(response);
        if (response.success) {
          setIsAuthenticated(true);
          setUserInfo(response.data.decoded);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAuth();
  }, []);

  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider value={{ token, setToken, logOut, isAuthenticated, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
