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
import ProtectedRoute from "./protected.route";
import Chatbot from "../pages/chatbot";
import DropsDetail from "../pages/drops.detail";
import DropsPage from "../pages/drops.page";
import CategoriesPage from "../pages/categories.page";

import Bottoms from "../components/shop/categories.page/bottoms";
import Hoodie from "../components/shop/categories.page/hoodie";

import { Route, Routes } from "react-router-dom";
import Jacket from "../components/shop/categories.page/jacket";
import Tshirt from "../components/shop/categories.page/tshirt";
import Accessories from "../pages/accessories.page";
import ShoppingCart from "../pages/shopping-cart";

export default function Routers() {
  return (
    <Routes>
      {/*---public routes---*/}
      <Route path="/" element={<LandingPage />} />
      <Route path="/drops" element={<DropsPage />} />
      <Route path="/drops/:id" element={<DropsDetail />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/bottoms" element={<Bottoms />} />
      <Route path="/categories/hoodie" element={<Hoodie />} />
      <Route path="/categories/jacket" element={<Jacket />} />
      <Route path="/categories/tshirt" element={<Tshirt />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      {/* --protected route-- */}
      {/* if user is authorized, they cannot go to this route */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* --private route-- */}
      {/* if user is not authorized, they cannot go to this route */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/admin" element={<Admins />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      {/* handle not found route */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
