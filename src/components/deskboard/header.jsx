import React from "react";
import zoraBlack from "../../assets/zora.svg";
import { FaSearch } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { navOpen } from "../../recoil";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidCircle } from "react-icons/bi";

export default function Header() {
  const [open, setOpen] = useRecoilState(navOpen);
  const openDrawer = () => setOpen(true);

  return (
    <header
      className={`lg:ml-64 p-4 py-5 pt-8 sticky z-1 top-0 left-0 hover:bg-black hover:bg-opacity-40 lg:hover:bg-transparent lg:hover:bg-opacity-0 ${
        open && "opacity-0"
      }`}
    >
      <div className="flex justify-between px-5">
        <div className="flex">
          <button
            className="inline-flex items-center p-1 mt-2 ml-3 text-2xl text-neutral-900 rounded-lg lg:hidden hover:bg-neutral-800 focus:outline-none
        focus:ring-2 focus:ring-neutral-800"
            onClick={openDrawer}
          >
            <HiMenuAlt2 />
          </button>
          <img src={zoraBlack} alt="logo" className="w-14 md:w-16 mx-8 " />
          <h3 className="px-5 py-1 border-l-4 border-neutral-900 text-sm md:text-xl font-semibold">
            Welcome back, <span>John Doe</span> !
          </h3>
        </div>
        <div className="px-3 justify-center items-center hidden sm:flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
          <div
            className="flex items-center border border-neutral-900 rounded-md p-1 text-xl focus-within:ring-1 focus-within:ring-inset
          focus-within:border-neutral-900 focus-within:ring-neutral-900 focus-within:text-xs"
          >
            <span>
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="p-0 ps-2 border-0 ring-0 bg-transparent focus:ring-0 placeholder-neutral-600 text-sm"
            />
          </div>
          <div className="flex pt-3 sm:pb-2 sm:pt-0 lg:pt-0 items-center">
            <span className="text-2xl ps-4">
              <IoIosNotifications />
            </span>
            <span className="text-3xl ps-4">
              <BiSolidCircle />
            </span>
            <h4 className="ps-2 text-md font-medium">John Doe</h4>
          </div>
        </div>
      </div>
    </header>
  );
}
