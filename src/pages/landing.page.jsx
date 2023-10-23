import React from "react";
import Header from "../components/landing.page/header";
import Popular from "../components/landing.page/popular";

import Navbar from "../components/landing.page/navbar";
import SummerSale from "../components/landing.page/summer.sale";
import Categories from "../components/landing.page/categories";
import About from "../components/landing.page/about";
import Footer from "../components/landing.page/footer";

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
      </main>
      <Footer />
    </>
  );
}
