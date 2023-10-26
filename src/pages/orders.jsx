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
            {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4 text-left">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4 text-left">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4 text-left">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <TableOrders />
          </div>
        </div>
      </section>
    </>
  );
}
