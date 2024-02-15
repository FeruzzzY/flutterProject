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
import { useTranslation } from "react-i18next";

const UlLinks = ({ link, text, setLogOut, close }) => {
  const { t } = useTranslation();
  const list = [
    {
      text: t("sidebar_links.my_courses"),
      icon: <BookOpenIcon />,
      link: "/dashboard/problem-solve",
    },
    {
      text: t("sidebar_links.certificates"),
      icon: <CertificateIcon />,
      link: "/dashboard/certificates",
    },
    {
      text: t("sidebar_links.payments"),
      icon: <PaymentsIcon />,
      link: "/dashboard/payments",
    },
    {
      text: t("sidebar_links.settings"),
      icon: <SettingsIcon />,
      link: "/dashboard/settings",
    },
    {
      text: "Courses",
      icon: <BookOpenIcon />,
      link: "/dashboard/courses",
    },
  ];
  const list_sub = [
    {
      text: t("sidebar_links.help"),
      icon: <HelpIcon />,
      link: "/dashboard/help",
    },
  ];
  return (
    <div>
      <ul
        className="flex flex-col w-full mt-4 !h-[calc(100vh_-_230px)] overflow-y-auto overflow-x-hidden
      px-2 py-2"
      >
        <li className="w-full my-1">
          <NavLink
            end
            to={"/dashboard"}
            onClick={close}
            className={({ isActive }) =>
              isActive
                ? "flex items-center w-full p-4 rounded-xl gap-3 text-xl !text-dark font-semibold bg-gray duration-150s"
                : "flex items-center w-full p-4 rounded-xl gap-3 text-xl font-semibold text-grayDark hover:bg-gray hover:text-dark duration-150"
            }
          >
            <HomeIcon /> <span className="">{t("sidebar_links.home")}</span>
          </NavLink>
        </li>
        {list?.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <li key={index} className="w-full my-1">
              <NavLink
                to={link}
                onClick={close}
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
      <ul className="flex flex-col w-full p-2">
        {list_sub?.map((item, index) => {
          const { text, icon, link } = item;
          return (
            <li key={index} className="w-full my-0.5">
              <NavLink
                end
                to={link}
                onClick={close}
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
        <li className="w-full my-0.5">
          <div
            onClick={setLogOut}
            className="flex items-center w-full p-4 rounded-xl gap-3 text-xl font-semibold text-grayDark cursor-pointer hover:bg-gray hover:text-dark duration-150"
          >
            <LogOutIcon />{" "}
            <span className="">{t("sidebar_links.log_out")}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UlLinks;
