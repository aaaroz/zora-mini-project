import React, { useEffect } from "react";
import blankProfile from "../assets/blank.profile.jpg";
import ReactHelmet from "../components/react.helmet";
import Sidebar from "../components/profile/sidebar";
import SkeletonProfile from "../components/profile/skeleton.profile";
import { DrawerWithNav } from "../components/profile/drawer.nav";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import { Link, useParams } from "react-router-dom";
import { auth } from "../configs/firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetUserById, selectUser } from "../store/get.user.slice";
import { useAuthState } from "react-firebase-hooks/auth";
import HeaderDashboard from "../components/header.dashboard";

export default function Profile() {
  const isActive = useRecoilValue(sidebarIsActive);
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const { id } = useParams();
  const stateUser = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchGetUserById(id));
    if (loading) return;
    if (user) return;
  }, [dispatch, id, loading, user]);

  return (
    <>
      <ReactHelmet
        page={"Profile"}
        descContent={"page Profile"}
        keywordsContent={"Profile of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="p-2 lg:ml-64">
        <div className="rounded-md shadow-md border bg-neutral-100">
          {stateUser.status === "loading" && <SkeletonProfile />}
          {stateUser.status === "success" &&
            stateUser.data.map((data, index) => (
              <div
                className="grid grid-cols-1 p-5 place-items-center md:grid-cols-2"
                key={index + 1}
              >
                <div>
                  <h1 className="block text-2xl mb-3 font-bold font-serif leading-6 text-gray-900">
                    Admin Profile
                  </h1>
                  <h2 className="text-lg mb-2 font-serif ">
                    <span>Display Name : </span>
                    {data.name}
                  </h2>
                  <h4 className="text-md mb-2 font-serif ">
                    <span>Email : </span>
                    {data.email}
                  </h4>
                  <h4 className="text-md mb-2 font-serif ">
                    <span>User Id : </span>
                    {data.uid}
                  </h4>
                  <h4 className="text-md mb-2 font-serif ">
                    <span>Auth Provider : </span>
                    {data.authProvider}
                  </h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {data?.image ? (
                    <div className="w-24 h-[6.3rem] border-2 rounded-md border-neutral-900 bg-neutral-900 ">
                      <img
                        src={data?.image}
                        alt="profile"
                        className="w-24 h-24 object-cover object-center rounded-md"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-24 border-2 rounded-md border-neutral-900 bg-neutral-900`}
                    >
                      <img src={blankProfile} alt="blank" />
                    </div>
                  )}
                  <Link to="/settings">
                    <button className="mt-2 px-4 py-1 text-sm rounded-md text-white bg-neutral-900 hover:bg-neutral-950">
                      Change Profile Photo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          {stateUser.status === "failed" && (
            <div>
              <p>Something Went Wrong</p>
              <p>{stateUser.data.message}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
