import React from "react";
import Signin from "../pages/login";

import { authService } from "../configs/auth";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  if (authService.isAuthorized()) {
    return <Outlet />;
  }
  return <Signin />;
}
