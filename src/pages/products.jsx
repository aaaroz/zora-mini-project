import React from "react";
import { DrawerWithNav } from "../components/products/drawer.nav";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import Sidebar from "../components/products/sidebar";
import { Link } from "react-router-dom";
import ListProducts from "../components/products/list.products";
import Header from "../components/dashboard/header";
import ReactHelmet from "../components/react.helmet";

export default function Products() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Products"}
        descContent={"page product"}
        keywordsContent={"product of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <Header />
      <section className="p-4 lg:ml-64">
        <div className="flex p-4 justify-between px-24">
          <select
            name="category"
            className="rounded-md border-0 py-1.5 px-2
                 text-gray-900 shadow-sm ring-1 ring-inset cursor-pointer ring-gray-300
                 focus:ring-0.1 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
          >
            <option value="">Sort by Category</option>
            <option value="Hoodie">Hoodie</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Jacket">Jacket</option>
            <option value="Accessories">Accessories</option>
          </select>
          <Link to="/add-product">
            <button className="rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-neutral-900 hover:bg-neutral-950">
              Create Product
            </button>
          </Link>
        </div>
        <h1 className="ps-24 py-5 text-xl font-semibold">Products List</h1>
        <ListProducts />
      </section>
    </>
  );
}
