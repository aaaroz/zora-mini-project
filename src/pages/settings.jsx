import React from "react";
import ReactHelmet from "../components/react.helmet";
import { useRecoilValue } from "recoil";
import { sidebarIsActive } from "../recoil";
import { DrawerWithNav } from "../components/settings/drawer.nav";
import Sidebar from "../components/settings/sidebar";
import Header from "../components/dashboard/header";
import FormEditProfile from "../components/settings/form.edit.profile";

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
      <Header />
      <section className="p-24 lg:ml-64">
        <div className="border-2 rounded-md border-dashed">
          <FormEditProfile />
        </div>
      </section>
    </>
  );
}
