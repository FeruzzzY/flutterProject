import React, { useEffect, useState } from "react";
import TitleCabinet from "../global/TitleCabinet";
import NavDropDown from "../global/NavDropDown";
import OverflowHidden from "../global/OverflowHidden";
import LogOutModal from "../modals/LogOutModal";
import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import SideBar from "./SideBar";

const NavigationDashboard = ({ title }) => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="fixed top-0 left-0 lg:left-[300px] lg:w-[calc(100%_-_300px)] 
      w-full lg:py-3 py-0 lg:px-6 px-3 bg-white flex items-center justify-between border-b 
      border-b-[#E8E9EB]"
      >
        <TitleCabinet title={title} className="!mb-0" />
        <div className="flex gap-3 items-center">
          <NavDropDown
            open={open}
            setOpen={setOpen}
            toggleDropdown={toggleDropdown}
            setLogOut={() => setLogOut(true)}
            cabinetTrue={true}
          />
          <div className="lg:hidden flex">
            {mobileOpen ? (
              <RiMenu2Fill
                onClick={() => setMobileOpen(false)}
                size="28"
                className="cursor-pointer"
                color="#2A85FF"
              />
            ) : (
              <RiMenu3Fill
                onClick={() => setMobileOpen(true)}
                size="28"
                className="cursor-pointer"
                color="#2A85FF"
              />
            )}
          </div>
        </div>
      </div>
      {logOut ? (
        <OverflowHidden>
          <LogOutModal setLogOut={() => setLogOut(false)} cabinetTrue={true} />
        </OverflowHidden>
      ) : null}
      {mobileOpen ? (
        <SideBar sideBarMobile={true} close={() => setMobileOpen(false)} />
      ) : null}
    </>
  );
};

export default NavigationDashboard;
