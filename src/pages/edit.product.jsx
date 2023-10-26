import React from "react";
import Sidebar from "../components/products/sidebar";
import FormEditProduct from "../components/products/form.edit.products";
import { sidebarIsActive } from "../recoil";
import { DrawerWithNav } from "../components/products/drawer.nav";
import { useRecoilValue } from "recoil";
import ReactHelmet from "../components/react.helmet";
import HeaderDashboard from "../components/header.dashboard";

export default function EditProduct() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Edit Products"}
        descContent={"page Edit product"}
        keywordsContent={"Edit product of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="p-4 lg:ml-64">
        <div className="p-4 border-gray-200 border-dashed rounded-lg border-2">
          <FormEditProduct />
        </div>
      </section>
    </>
  );
}
