import React from "react";
import LandingPage from "../pages/landing.page";
import Signin from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/not.found";
import PrivateRoute from "./private.route";
import Products from "../pages/products";
import AddProduct from "../pages/add.product";
import ProductDetails from "../pages/product.details";
import EditProduct from "../pages/edit.product";
import Orders from "../pages/orders";
import Admins from "../pages/admins";
import Profile from "../pages/profile";
import Settings from "../pages/settings";

import { Route, Routes } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<Admins />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/settings/:id" element={<Settings />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
