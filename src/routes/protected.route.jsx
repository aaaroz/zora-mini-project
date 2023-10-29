import React from "react";
import { authService } from "../configs/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // if user is not authorized, user can go to the outlet route
  if (!authService.isAuthorized()) return <Outlet />;

  // but if user is authorized, user will be redirectly to the dashboard page
  return <Navigate to="/dashboard" />;
}
