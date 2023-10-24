import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut, BiSolidShoppingBags } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { IoPerson, IoPersonCircleSharp } from "react-icons/io5";
import { PiChatCenteredDotsFill } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { authService } from "../../configs/auth";
import { userId } from "../../recoil";
import { useRecoilValue } from "recoil";

export default function Sidebar({ isActive }) {
  const uid = useRecoilValue(userId);

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0">
      <div className="h-full py-3 overflow-y-auto bg-neutral-900 text-blue-gray-50">
        <div className="pt-5 pb-11 border-b-2">
          <h1 className="text-center font-semibold text-3xl">DASHBOARD</h1>
          <p className="text-sm text-center font-normal mt-2">
            Sales Management Dashboard
          </p>
        </div>
        <h1 className="text-md font-medium pt-5 ps-8">MAIN MENU</h1>
        <div className="px-4">
          <ul className="mt-5">
            <li>
              <a
                href="/dashboard"
                className={` text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3
               hover:bg-neutral-950  rounded-lg ${
                 isActive && "bg-neutral-950"
               }`}
              >
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span className={`text-sm font-medium flex-1 `}>Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="/products"
                className=" text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 
               hover:bg-neutral-950 rounded-lg mt-1"
              >
                <span className="text-2xl block float-left">
                  <BiSolidShoppingBags />
                </span>
                <span className={`text-sm font-medium flex-1 `}>Products</span>
              </a>
            </li>

            <li>
              <a
                href="/orders"
                className=" text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 hover:bg-neutral-950 rounded-lg mt-1"
              >
                <span className="text-2xl block float-left">
                  <HiShoppingCart />
                </span>
                <span className={`text-sm font-medium flex-1 `}>Orders</span>
              </a>
            </li>

            <li>
              <a
                href="/chatbotai"
                className=" text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 hover:bg-neutral-950 rounded-lg mt-1"
              >
                <span className="text-2xl block float-left pe-0">
                  <PiChatCenteredDotsFill />
                </span>
                <span className={`text-sm font-medium flex-1 `}>
                  Chatbot AI
                </span>
              </a>
            </li>

            <li>
              <a
                href="/admin"
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 hover:bg-neutral-950 rounded-lg mt-1"
              >
                <span className="text-2xl block float-left">
                  <IoPerson />
                </span>
                <span className={`text-sm font-medium flex-1 `}>Admin</span>
              </a>
            </li>
          </ul>
        </div>
        <h1 className="text-md font-medium pt-5 ps-8">HELP & SUPPORT</h1>
        <div className="px-4">
          <ul className="mt-5">
            <li>
              <a
                href={`/profile/${uid}`}
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 hover:bg-neutral-950 rounded-lg mt-1"
              >
                <span className="text-2xl block float-left">
                  <IoPersonCircleSharp />
                </span>
                <span className={`text-sm font-medium flex-1 `}>Profile</span>
              </a>
            </li>
            <li>
              <a
                href={`/settings/${uid}`}
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 hover:bg-neutral-950 rounded-lg mt-1"
              >
                <span className="text-2xl block float-left">
                  <AiFillSetting />
                </span>
                <span className={`text-sm font-medium flex-1 `}>Settings</span>
              </a>
            </li>
            <li
              className="text-sm flex items-center gap-x-4 cursor-pointer p-2 pb-3 hover:bg-neutral-950 rounded-lg mt-1"
              onClick={() => authService.logOut()}
            >
              <span className="text-2xl block float-left">
                <BiLogOut />
              </span>
              <span className={`text-sm font-medium flex-1 `}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
