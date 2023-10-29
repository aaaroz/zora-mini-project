import React from "react";
import { DrawerWithNav } from "../components/products/drawer.nav";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import { Link } from "react-router-dom";
import Sidebar from "../components/products/sidebar";
import ListProducts from "../components/products/list.products";
import ReactHelmet from "../components/react.helmet";
import HeaderDashboard from "../components/header.dashboard";

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
      <HeaderDashboard />
      <section className="p-4 lg:ml-64">
        <div className="flex p-4 justify-between md:px-24">
          <h1 className="md:ps-24 py-5 text-xl font-semibold">Products List</h1>

          <Link to="/add-product">
            <button className="rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white bg-neutral-900 hover:bg-neutral-950">
              Create Product
            </button>
          </Link>
        </div>
        <ListProducts />
      </section>
    </>
  );
}
