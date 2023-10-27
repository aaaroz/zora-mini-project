import React from "react";
import ReactHelmet from "../components/react.helmet";
import Sidebar from "../components/orders/sidebar";
import { DrawerWithNav } from "../components/orders/drawer.nav";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import TableOrders from "../components/orders/table.orders";
import HeaderDashboard from "../components/header.dashboard";

export default function Orders() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Orders"}
        descContent={"page Orders"}
        keywordsContent={"Orders of zora ecommerce"}
      />

      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="p-5 lg:ml-64">
        <div className="md:px-10 rounded-lg border-gray-200">
          <h1 className="py-5 text-xl font-semibold">Orders List</h1>
          <div className="flex gap-2 mb-5">
            <button className="px-4 py-1 rounded-lg text-xs border text-white bg-neutral-900 border-neutral-800 hover:bg-neutral-950 hover:text-white focus:bg-neutral-900 focus:text-white">
              All Orders
            </button>
            <button className="px-4 py-1 rounded-lg text-xs border border-neutral-800 hover:bg-neutral-950 hover:text-white focus:bg-neutral-900 focus:text-white">
              Delivered
            </button>
            <button className="px-4 py-1 rounded-lg text-xs border border-neutral-800 hover:bg-neutral-950 hover:text-white focus:bg-neutral-900 focus:text-white">
              Ongoing
            </button>
            <button className="px-4 py-1 rounded-lg text-xs border border-neutral-800 hover:bg-neutral-950 hover:text-white focus:bg-neutral-900 focus:text-white">
              Canceled
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableOrders />
          </div>
        </div>
      </section>
    </>
  );
}
