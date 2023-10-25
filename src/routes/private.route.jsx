import React from "react";

import { authService } from "../configs/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute() {
  const location = useLocation();
  const { pathname } = location;

  let path = "/signin";

  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`;
  }

  if (authService.isAuthorized()) {
    return <Outlet />;
  }

  return <Navigate to={path} />;
}
