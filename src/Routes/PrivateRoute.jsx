/* eslint-disable react/prop-types */


import { useContext } from "react";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (user) {
    return children;
  }
    if (loading) {
      return <progress className="progress w-56 text-center"></progress>;
    }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
