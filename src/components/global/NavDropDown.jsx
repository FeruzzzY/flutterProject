import React from "react";
import AvatarIcon from "../icons/AvatarIcon";
import GlobusIcon from "../icons/GlobusIcon";
import LogOutIcon from "../icons/LogOutIcon";
import { Link } from "react-router-dom";

const NavDropDown = ({ open, toggleDropdown }) => {
  return (
    <div
      onClick={() => toggleDropdown()}
      // onBlur={() => toggleDropdown()}
      // onFocus={() => toggleDropdown()}
      tabIndex="0"
      className="relative inline-flex my-2 z-9999"
    >
      <div
        className="flex items-center cursor-pointer rounded-full"
        onClick={() => toggleDropdown()}
      >
        <AvatarIcon />
      </div>
      {open && (
        <div className="absolute top-[50px] right-[0] w-auto text-left text-base font-medium bg-white border border-[#eaeaee] rounded-lg overflow-hidden">
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
              to="/dashboard/settings"
              className="group flex gap-3 items-center py-4 px-6"
              onClick={() => toggleDropdown()}
            >
              <GlobusIcon />
              <p className="text-base font-bold text-black duration-200 group-hover:text-dodgerBlue">
                Go to cabinet
              </p>
            </Link>
            <div className="group flex gap-3 items-center py-4 px-6">
              <LogOutIcon />
              <p className="text-base font-bold text-black duration-200 group-hover:text-dodgerBlue">
                Muzaffar Fozilov
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
