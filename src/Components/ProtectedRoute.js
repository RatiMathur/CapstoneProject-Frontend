import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const NavigatetoLoginScreen = <Navigate to="/login" />;
  if (!token) {
    return NavigatetoLoginScreen;
  }
  const decoded = jwt_decode(token);
  if (decoded.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    return NavigatetoLoginScreen;
  }
  return children;
}
