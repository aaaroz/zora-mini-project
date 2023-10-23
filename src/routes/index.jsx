import React from "react";
import LandingPage from "../pages/landing.page";
import Signin from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Sidebar from "../components/deskboard/sidebar";
import NotFound from "../pages/not.found";

import { DrawerWithNav } from "../components/deskboard/drawer.nav";
import { Route, Routes } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/drawer" element={<DrawerWithNav />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
