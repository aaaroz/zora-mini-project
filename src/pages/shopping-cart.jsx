import React, { useState } from "react";
import Navbar from "../components/shop/navbar";
import Header from "../components/shop/header";
import Footer from "../components/shop/footer";
import ShopCart from "../components/shop/shopping.cart.page/shop.cart";
import ReactHelmet from "../components/react.helmet";

export default function ShoppingCart() {
  return (
    <>
      <ReactHelmet
        page={"Shopping Cart"}
        descContent={"page Shopping Cart"}
        keywordsContent={"Shopping Cart of zora ecommerce"}
      />
      <Navbar />
      <main>
        <Header />
        <ShopCart />
      </main>
      <Footer />
    </>
  );
}
