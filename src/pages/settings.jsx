import React from "react";
import ReactHelmet from "../components/react.helmet";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import { DrawerWithNav } from "../components/settings/drawer.nav";
import Sidebar from "../components/settings/sidebar";
import FormEditProfile from "../components/settings/form.edit.profile";
import HeaderDashboard from "../components/header.dashboard";

export default function Settings() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Settings"}
        descContent={"page Settings"}
        keywordsContent={"Settings of zora ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="lg:px-24 py-14 lg:ml-64">
        <div className="border-1 rounded-lg border px-10">
          <h2 className="block text-xl ms-6 my-2 font-bold leading-6 text-gray-900">
            Profile Settings
          </h2>
          <FormEditProfile />
        </div>
      </section>
    </>
  );
}
