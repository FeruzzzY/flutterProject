import React, { useEffect, useRef } from "react";
import AvatarIcon from "../icons/AvatarIcon";
import GlobusIcon from "../icons/GlobusIcon";
import LogOutIcon from "../icons/LogOutIcon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavDropDown = ({
  open,
  setOpen,
  toggleDropdown,
  setLogOut,
  cabinetTrue,
}) => {
  const dropdownRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Function to handle click outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      tabIndex="0"
      className="relative inline-flex my-2 z-[8080]"
      ref={dropdownRef}
    >
      <div
        className="flex items-center cursor-pointer rounded-full"
        onClick={() => toggleDropdown()}
      >
        <AvatarIcon />
      </div>
      {open && (
        <div
          className="absolute top-[50px] right-[0] w-auto text-left 
        text-base font-medium bg-white border border-[#eaeaee] 
        z-[8005] rounded-lg overflow-hidden"
        >
          <div
            className="inline-flex flex-col 
            overflow-y-auto overflow-x-hidden max-h-[280px] sm:w-[301px] w-[250px]
           "
          >
            <div className="flex gap-3 items-center border-b border-b-gray p-4">
              <AvatarIcon />
              <p className="text-base font-bold text-black">Yarbek</p>
            </div>
            <Link
              to={cabinetTrue ? `/` : `/dashboard/settings`}
              className="group flex gap-3 items-center py-4 px-6"
              onClick={() => toggleDropdown()}
            >
              <GlobusIcon />
              <p className="text-base font-bold text-black duration-200 group-hover:text-dodgerBlue">
                {cabinetTrue
                  ? t("sidebar_links.go_to_website")
                  : t("sidebar_links.go_to_cabinet")}
              </p>
            </Link>
            <div
              className="group flex gap-3 items-center py-4 px-6 cursor-pointer"
              onClick={() => {
                setLogOut();
                toggleDropdown();
              }}
            >
              <LogOutIcon />
              <p className="text-base font-bold text-black duration-200 group-hover:text-dodgerBlue">
                Log out
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
