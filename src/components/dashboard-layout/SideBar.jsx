import React, { useState } from "react";
import { Brand } from "../icons";
import { UlLinks } from "./sidebar-parts";
import OverflowHidden from "../global/OverflowHidden";
import LogOutModal from "../modals/LogOutModal";

const SideBar = ({ close, sideBarMobile }) => {
  const [logOut, setLogOut] = useState(false);
  return (
    <>
      {sideBarMobile ? (
        <div className="lg:hidden flex">
          <div
            className="bg-black fixed w-full h-[calc(100vh_-_65px)] 
            top-[65px] opacity-50 z-[4000] border-t border-gray"
            onClick={close}
          />
          <div
            className="fixed w-[250px] h-[calc(100vh_-_65px)]
            overflow-x-hidden overflow-y-auto top-[65px] left-0 bg-white border-r 
            border-t border-gray z-[4002] px-1"
          >
            <UlLinks close={close} setLogOut={() => setLogOut(true)} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full border-r border-r-[#E8E9EB] bg-white">
          <Brand />
          <UlLinks close={close} setLogOut={() => setLogOut(true)} />
        </div>
      )}
      {logOut ? (
        <OverflowHidden>
          <LogOutModal setLogOut={() => setLogOut(false)} cabinetTrue={true} />
        </OverflowHidden>
      ) : null}
    </>
  );
};

export default SideBar;
