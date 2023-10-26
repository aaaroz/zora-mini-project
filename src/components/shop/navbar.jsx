import React from "react";
import zoraWhite from "../../assets/zora.white.svg";
import { useRecoilState } from "recoil";
import { navOpen } from "../../recoil";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useRecoilState(navOpen);

  const handleOpen = () => {
    if (!isOpen) setIsOpen(true);
    else setIsOpen(false);
  };

  return (
    <nav className="shadow-md w-full bg-neutral-900 sticky z-50 top-0 left-0">
      <div
        className={`justify-between z-10 py-5 px-5 md:px-10 md:py-2 md:flex`}
      >
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <img src={zoraWhite} alt="logo" className="w-16 md:w-20 h-10 ms-16" />
        </div>

        <div onClick={handleOpen}>
          {isOpen ? (
            <IoCloseSharp className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden" />
          ) : (
            <GiHamburgerMenu className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden" />
          )}
        </div>
        <ul
          className={`text-blue-gray-50  pb-5 absolute -z-10 left-0 w-full transition-all
    bg-neutral-900 md:z-auto md:w-auto md:pl-0 md:static md:flex md:items-center md:pb-0 ${
      isOpen ? "top-20" : "top-[-300px] hidden"
    }`}
        >
          <li className="md:ml-4 text-md md:my-0 hover:bg-neutral-950 p-3 pb-4 mt-3 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Home {isOpen}
            </a>
          </li>
          <li className="md:ml-4 text-md md:my-0 hover:bg-neutral-950 p-3 pb-4 mt-3 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Drops
            </a>
          </li>
          <li className="md:ml-4 text-md md:my-0 hover:bg-neutral-950 p-3 pb-4 mt-3 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Categories
            </a>
          </li>
          <li className="md:ml-4 text-md md:my-0 hover:bg-neutral-950 p-3 pb-4 mt-3 md:hover:bg-transparent">
            <a
              href="/#"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              About
            </a>
          </li>
          <li className="md:ml-4 text-md md:my-0 hover:bg-neutral-950 p-3 pb-4 mt-3 md:hover:bg-transparent">
            <a
              href="/dashboard"
              className={`hover:text-blue-gray-500 ms-16 md:ms-0 duration-100`}
            >
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
