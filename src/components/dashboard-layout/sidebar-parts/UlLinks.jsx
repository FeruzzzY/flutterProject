import React from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpenIcon,
  CertificateIcon,
  HelpIcon,
  HomeIcon,
  LogOutIcon,
  PaymentsIcon,
  SettingsIcon,
} from "../../icons";

const UlLinks = ({ link, text }) => {
  const list = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/dashboard",
    },
    {
      text: "My Courses",
      icon: <BookOpenIcon />,
      link: "/dashboard/problem-solve",
    },
    {
      text: "Certificates",
      icon: <CertificateIcon />,
      link: "/dashboard/certificates",
    },
    {
      text: "Payments",
      icon: <PaymentsIcon />,
      link: "/dashboard/payments",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      link: "/dashboard/settings",
    },
  ];
  const list_sub = [
    {
      text: "Help",
      icon: <HelpIcon />,
      link: "/dashboard/help",
    },
  ];
  return (
    <div>
      <ul className="flex flex-col w-full mt-6 !h-[calc(100vh_-_252px)] overflow-y-auto overflow-x-hidden">
        {list?.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <li key={index} className="w-full my-1">
              <NavLink
                end
                to={link}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center w-full p-4 rounded-xl gap-3 text-xl !text-dark font-semibold bg-gray duration-150s"
                    : "flex items-center w-full p-4 rounded-xl gap-3 text-xl font-semibold text-grayDark hover:bg-gray hover:text-dark duration-150"
                }
              >
                {icon} <span className="">{text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col w-full mt-2">
        {list_sub?.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <li key={index} className="w-full my-1">
              <NavLink
                end
                to={link}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center w-full p-4 rounded-xl gap-3 text-xl !text-dark font-semibold bg-gray duration-150"
                    : "flex items-center w-full p-4 rounded-xl gap-3 text-xl font-semibold text-grayDark hover:bg-gray hover:text-dark duration-150"
                }
              >
                {icon} <span className="">{text}</span>
              </NavLink>
            </li>
          );
        })}
        <li className="w-full my-1">
          <div className="flex items-center w-full p-4 rounded-xl gap-3 text-xl font-semibold text-grayDark cursor-pointer hover:bg-gray hover:text-dark duration-150">
            <LogOutIcon /> <span className="">Log out</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UlLinks;
