import React from "react";
import Navbar from "../components/shop/navbar";
import Header from "../components/shop/header";
import Footer from "../components/shop/footer";
import NewArrivals from "../components/shop/drops.page/new.arrivals";
import ReactHelmet from "../components/react.helmet";

export default function DropsPage() {
  return (
    <>
      <ReactHelmet
        page={"Drops"}
        descContent={"page Drops"}
        keywordsContent={"Drops of zora ecommerce"}
      />
      <Navbar />
      <main>
        <Header />
        <NewArrivals />
      </main>
      <Footer />
    </>
  );
}
