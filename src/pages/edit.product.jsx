import React from "react";
import Sidebar from "../components/products/sidebar";
import Header from "../components/products/header";
import FormEditProduct from "../components/products/form.edit.products";
import { sidebarIsActive } from "../recoil";
import { DrawerWithNav } from "../components/products/drawer.nav";
import { useRecoilValue } from "recoil";

export default function EditProduct() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <Header />
      <section className="p-4 lg:ml-64">
        <div className="p-4 border-gray-200 border-dashed rounded-lg border-2">
          <FormEditProduct />
        </div>
      </section>
    </>
  );
}
