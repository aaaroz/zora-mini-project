import React from "react";
import Header from "../components/shop/header";
import Popular from "../components/shop/landing.page/popular";

import Navbar from "../components/shop/navbar";
import SummerSale from "../components/shop/landing.page/summer.sale";
import Categories from "../components/shop/landing.page/categories";
import About from "../components/shop/landing.page/about";
import Footer from "../components/shop/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Popular />
        <SummerSale />
        <Categories />
        <About />
        <section>Landing Test</section>
        <section>Auth Test</section>
      </main>
      <Footer />
    </>
  );
}
