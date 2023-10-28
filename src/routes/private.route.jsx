import React from "react";

import { authService } from "../configs/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute() {
  const location = useLocation();
  const { pathname } = location;

  let path = "/signin";

  // if user write another route, then the result of path name will be added "?return_to="
  //  ,so after logged in user will be directly go to the route
  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`;
  }

  // if user is authorized, then user can go to the private route
  if (authService.isAuthorized()) {
    return <Outlet />;
  }

  //if user is not authorized, user will be redirected to the login page
  return <Navigate to={path} />;
}
