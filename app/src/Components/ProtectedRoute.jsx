import { Navigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;