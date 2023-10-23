import React from "react";
import LandingPage from "../pages/landing.page";
import Signin from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/not.found";
import PrivateRoute from "./private.route";

import { Route, Routes } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
