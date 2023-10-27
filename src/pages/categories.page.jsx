import React from "react";
import Navbar from "../components/shop/navbar";
import Header from "../components/shop/header";
import ListCategories from "../components/shop/categories.page/list.categories";
import Footer from "../components/shop/footer";
import ReactHelmet from "../components/react.helmet";

export default function CategoriesPage() {
  return (
    <>
      <ReactHelmet
        page={"Categories"}
        descContent={"page categories"}
        keywordsContent={"categories of zora ecommerce"}
      />
      <Navbar />
      <main>
        <Header />
        <ListCategories />
      </main>
      <Footer />
    </>
  );
}
