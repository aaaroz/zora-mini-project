import React from "react";
import Sidebar from "../components/products/sidebar";
import FormAddProducts from "../components/products/form.add.product";
import ReactHelmet from "../components/react.helmet";
import { DrawerWithNav } from "../components/products/drawer.nav";
import { sidebarIsActive } from "../recoil";
import { useRecoilValue } from "recoil";
import HeaderDashboard from "../components/header.dashboard";

export default function AddProduct() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Add Products"}
        descContent={"page add product"}
        keywordsContent={"add product of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="p-4 lg:ml-64">
        <div className="p-5">
          <FormAddProducts />
        </div>
      </section>
    </>
  );
}
