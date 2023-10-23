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
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
