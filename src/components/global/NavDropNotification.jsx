import React, { useEffect, useRef } from "react";
import NotificationIcon from "../icons/NotificationIcon";
import CloseIcon from "../icons/CloseIcon";
import BlueRoundIcon from "../icons/BlueRoundIcon";
import { useTranslation } from "react-i18next";
import BaseButtonOutline from "../buttons/BaseButtonOutline";
import { Link } from "react-router-dom";

const NavDropNotification = ({ open, setOpen, toggleDropdown }) => {
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
        className="flex items-center cursor-pointer rounded-full relative"
        onClick={() => toggleDropdown()}
      >
        <NotificationIcon color={open ? "#43D58F" : "#6E7179"} />
        <span class="relative flex h-3 w-3 -translate-x-1 -translate-y-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>
      {open && (
        <div
          className="absolute top-[30px] right-[0] w-auto text-left 
        text-base font-medium bg-white border border-[#eaeaee] 
        z-[8005] rounded-lg overflow-hidden"
        >
          <div
            className="inline-flex flex-col 
            overflow-y-auto overflow-x-hidden max-h-[480px] sm:w-[301px] w-[250px]
           "
          >
            <div className="px-4 py-[9px] flex justify-between gap-3 items-center border-b border-gray">
              <p className="text-base md:text-xl font-bold text-black">
                Notifications <span className="text-dodgerBlue text">(15)</span>
              </p>
              <CloseIcon
                className="cursor-pointer"
                onClick={() => toggleDropdown()}
              />
            </div>

            <div className="px-4 min-h-[200px] max-h-[300px] overflow-y-auto overflow-x-hidden">
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div
                    className="border-b border-gray last-of-type:border-b-0 py-4 "
                    key={index}
                  >
                    <div className="flex gap-5 items-start justify-between">
                      <p className="text-sm font-bold text-black">
                        Change your password
                      </p>
                      <BlueRoundIcon />
                    </div>
                    <p className="text-sm font-normal text-black mt-2">
                      In the ever-evolving landscape of programming languages,
                      Dart emerges as a powerful, open-source language...
                    </p>
                    <p className="text-xs font-normal text-grayDark mt-2">
                      17.01.2024, 17:44
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="px-4">
              <div className=" border-t border-gray  py-3">
                <Link to="/dashboard/notifications">
                  <BaseButtonOutline
                    type="button"
                    blue_color="blue_color"
                    className="!py-2 !text-sm !font-medium"
                  >
                    See all notification
                  </BaseButtonOutline>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropNotification;
