import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../../services/auth-service";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true)
        const response = await verifyToken();
        if (response.success) {
          setIsLoading(false)
          setIsAuthenticated(true);
          setUserInfo(response.data.decoded);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    checkAuth();
  }, [token]);

  function logOut() {
    setToken(null);
    setUserInfo(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider value={{ token, setToken, logOut, isAuthenticated, userInfo, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
