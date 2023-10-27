import React, { useEffect } from "react";
import zoraBlack from "../assets/zora.svg";
import { FaSearch } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { displayName, navOpen, userId } from "../recoil";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";

import { auth } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserById, selectUser } from "../store/get.user.slice";
import { BiSolidCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeaderDashboard() {
  const setOpen = useSetRecoilState(navOpen);
  const setUid = useSetRecoilState(userId);
  const setName = useSetRecoilState(displayName);

  const [user, loading] = useAuthState(auth);
  const stateUser = useSelector(selectUser);
  const dispatch = useDispatch();

  const openDrawer = () => setOpen(true);

  useEffect(() => {
    if (loading) return;

    dispatch(fetchGetUserById(user.uid));
    setName(stateUser?.data?.name);
    setUid(stateUser?.data?.uid);
  }, [dispatch]);
  return (
    <header
      className={`lg:ml-64 p-4 py-5 pt-8 sticky z-10 top-0 left-0 hover:bg-black hover:bg-opacity-40 lg:hover:bg-transparent lg:static`}
    >
      <div className="px-5">
        {stateUser.status === "success" &&
          stateUser.data.map((data, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex">
                <button
                  className="inline-flex items-center p-1 mt-2 ml-3 text-2xl text-neutral-900 rounded-lg lg:hidden hover:bg-neutral-50 focus:outline-none
        focus:ring-2 focus:ring-neutral-800"
                  onClick={openDrawer}
                >
                  <HiMenuAlt2 />
                </button>
                <Link to="/">
                  <img
                    src={zoraBlack}
                    alt="logo"
                    className="w-14 md:w-16 mx-8 "
                  />
                </Link>

                <h3 className="px-5 py-1 border-l-4 border-neutral-900 text-sm md:text-xl font-semibold">
                  Welcome back, <span>{data.name}</span> !
                </h3>
              </div>
              <div className="px-3 justify-center items-center hidden sm:flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
                <div className="flex pt-3 sm:pb-2 sm:pt-0 lg:pt-0 items-center">
                  <span className="text-2xl ps-4">
                    <IoIosNotifications />
                  </span>
                  {data.image ? (
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-10 h-10 rounded-full object-cover object-center"
                    />
                  ) : (
                    <span className="text-3xl ps-4">
                      <BiSolidCircle />
                    </span>
                  )}

                  <h4 className="ps-2 text-md font-medium">{data.name}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </header>
  );
}
