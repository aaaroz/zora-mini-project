import React from "react";
import Navbar from "../components/shop/navbar";
import Header from "../components/shop/header";
import Footer from "../components/shop/footer";
import ProductDetail from "../components/shop/drops.detail/product.detail";
import ReactHelmet from "../components/react.helmet";

export default function DropsDetail() {
  return (
    <>
      <ReactHelmet
        page={"Drop Details"}
        descContent={"page Drop Detail"}
        keywordsContent={"Drop Detail of zora ecommerce"}
      />
      <Navbar />
      <main>
        <Header />
        <ProductDetail />
      </main>
      <Footer />
    </>
  );
}
