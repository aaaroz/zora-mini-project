import React, { useEffect } from "react";
import zoraBlack from "../../assets/zora.svg";
import { FaSearch } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from "recoil";
import { displayName, navOpen, userId } from "../../recoil";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidCircle } from "react-icons/bi";
import { authService } from "../../configs/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
  const setOpen = useSetRecoilState(navOpen);
  const setUid = useSetRecoilState(userId);
  const [name, setName] = useRecoilState(displayName);
  const [user, loading] = useAuthState(auth);
  const openDrawer = () => setOpen(true);

  useEffect(() => {
    if (loading) return;

    const fetchUserName = async () => {
      try {
        if (authService.isAuthorized()) {
          const q = query(
            collection(db, "users"),
            where("uid", "==", user?.uid)
          );
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setUid(data.uid);
          setName(data.name);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserName();
  }, [user]);

  return (
    <header
      className={`lg:ml-64 p-4 py-5 pt-8 sticky z-1 top-0 left-0 hover:bg-black hover:bg-opacity-40 lg:hover:bg-transparent lg:static`}
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
            Welcome back, <span>{name}</span> !
          </h3>
        </div>
        <div className="px-3 justify-center items-center hidden sm:flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row">
          <div
            className="flex items-center border border-neutral-900 rounded-md p-1 text-xl focus-within:ring-1
            focus-within:border-neutral-900 focus-within:ring-neutral-900 focus-within:text-sm"
          >
            <span>
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="p-0 ps-2 border-0 ring-0 focus:ring-0 focus:border-0 bg-transparent placeholder-neutral-600 text-sm"
            />
          </div>
          <div className="flex pt-3 sm:pb-2 sm:pt-0 lg:pt-0 items-center">
            <span className="text-2xl ps-4">
              <IoIosNotifications />
            </span>
            {user?.photoURL ? (
              <img src={user?.photoURL} alt={name} className="w-10" />
            ) : (
              <span className="text-3xl ps-4">
                <BiSolidCircle />
              </span>
            )}
            <h4 className="ps-2 text-md font-medium">{name}</h4>
          </div>
        </div>
      </div>
    </header>
  );
}
