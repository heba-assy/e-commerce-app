import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={`/login`} state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
