import React from "react";
import { DrawerWithNav } from "../components/products/drawer.nav";
import Sidebar from "../components/products/sidebar";
import Header from "../components/products/header";
import FormAddProducts from "../components/products/form.add.product";
import { sidebarIsActive } from "../recoil";
import { useRecoilValue } from "recoil";

export default function AddProduct() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <Header />
      <section className="p-4 lg:ml-64">
        <div className="p-4 border-gray-200 border-dashed rounded-lg border-2">
          <FormAddProducts />
        </div>
      </section>
    </>
  );
}
