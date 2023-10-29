import React from "react";
import ReactHelmet from "../components/react.helmet";
import Sidebar from "../components/chatbot/sidebar";
import { DrawerWithNav } from "../components/chatbot/drawer.nav";
import { sidebarIsActive } from "../recoil";
import { useRecoilValue } from "recoil";
import ChatbotAi from "../components/chatbot/chatbot.ai";
import HeaderDashboard from "../components/header.dashboard";

export default function Chatbot() {
  const isActive = useRecoilValue(sidebarIsActive);

  return (
    <>
      <ReactHelmet
        page={"Chatbot AI"}
        descContent={"Page Chatbot AI"}
        keywordsContent={"Chatbot AI of Zora Ecommerce"}
      />
      <DrawerWithNav isActive={isActive} />
      <Sidebar isActive={isActive} />
      <HeaderDashboard />
      <section className="rounded-md lg:ml-64">
        <div className="md:mx-3">
          <ChatbotAi />
        </div>
      </section>
    </>
  );
}
