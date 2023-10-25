import React from "react";
import ReactHelmet from "../components/react.helmet";
import { DrawerWithNav } from "../components/admins/drawer.nav";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import Sidebar from "../components/admins/sidebar";
import Header from "../components/dashboard/header";
import { ProfileCard } from "../components/admins/profile.card";

export default function Admins() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Admin"}
        descContent={"page Admin"}
        keywordsContent={"Admin of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <Header />
      <section className="p-5 lg:ml-64">
        <div className="md:px-10">
          <h1 className="ps-20 pt-5 text-xl font-semibold">
            Administrators List
          </h1>
          <section className="p-5 gap-5 grid grid-cols-1 justify-items-center xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <ProfileCard />
          </section>
        </div>
      </section>
    </>
  );
}
