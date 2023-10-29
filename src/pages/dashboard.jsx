import React from "react";
import Sidebar from "../components/dashboard/sidebar";
import totalSales from "../assets/total.sales.svg";
import totalOrders from "../assets/total.orders.svg";
import totalProducts from "../assets/total.products.svg";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import ReactHelmet from "../components/react.helmet";
import HeaderDashboard from "../components/header.dashboard";

import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import { DrawerWithNav } from "../components/dashboard/drawer.nav";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import {
  barChartOptions,
  barChartData,
  productSalesDognutChartOptions,
  productSalesDognutChartData,
} from "../data";

export default function Dashboard() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Dashboard"}
        descContent={"page dashboard"}
        keywordsContent={"dashboard of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="p-4 lg:ml-64">
        <div className="p-4 border-gray-200 border-dashed rounded-lg ">
          <div className="grid grid-cols-1 gap-2 gap-y-9 place-items-center sm:grid-cols-2 md:grid-cols-3">
            <div className="flex">
              <img src={totalSales} alt="sales" className="w-12 md:w-auto" />
              <div className="block ms-2">
                <span className="m-0">Total Sales</span>
                <p className="text-xl md:text-2xl font-semibold m-0 mt-1 leading-3">
                  $65.556
                </p>
                <p className="flex items-center mt-3 text-green-500 font-semibold text-sm">
                  <span className="text-xl">
                    <BiUpArrowAlt />
                  </span>
                  +6.8%
                  <span className="text-gray-500 ms-2 font-medium text-xs">
                    Since last month
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <img src={totalOrders} alt="order" className="w-12 md:w-auto" />
              <div className="block ms-2">
                <span className="m-0">Total Orders</span>
                <p className="text-xl md:text-2xl font-semibold m-0 mt-1 leading-3">
                  555
                </p>
                <p className="flex items-center mt-3 text-red-500 font-semibold text-sm">
                  <span className="text-xl">
                    <BiDownArrowAlt />
                  </span>
                  +6.8%
                  <span className="text-gray-500 ms-2 font-medium text-xs">
                    Since last month
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <img
                src={totalProducts}
                alt="products"
                className="w-12 md:w-auto"
              />
              <div className="block ms-2">
                <span className="m-0">Total Products</span>
                <p className="text-xl md:text-2xl font-semibold m-0 mt-1 leading-3">
                  666
                </p>
                <p className="flex items-center mt-3 text-green-500 font-semibold text-sm">
                  <span className="text-gray-500 ms-2 font-medium text-xs">
                    All of your products that u post
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="p-5">
              <h3 className="pt-9">Sales Statistics</h3>
              <Chart
                options={barChartOptions}
                series={barChartData}
                type="bar"
                width="100%"
                height="90%"
              />
            </div>
            <div className="p-5">
              <h3 className="pt-9">Products Sold</h3>
              <ReactApexChart
                options={productSalesDognutChartOptions}
                series={productSalesDognutChartData}
                type="donut"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
