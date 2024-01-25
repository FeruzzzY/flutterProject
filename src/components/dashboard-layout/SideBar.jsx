import React from "react";
import { Brand } from "../icons";
import { UlLinks } from "./sidebar-parts";

const SideBar = () => {
  return (
    <div className="w-[350px] pt-7 px-6 flex flex-col h-full border-r border-r-[#E8E9EB]">
      <Brand />
      <UlLinks />
    </div>
  );
};

export default SideBar;
