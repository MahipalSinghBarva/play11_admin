import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtactedRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtactedRoute;
