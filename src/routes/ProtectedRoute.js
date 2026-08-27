// Protected route wrapper
import { Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  // const { isAuth } = useAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user || user.role !== "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;