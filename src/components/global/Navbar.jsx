import React, { useEffect, useState } from "react";
import { BrandIcon } from "../svg/BrandIcon";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BaseButtonOutline from "../buttons/BaseButtonOutline";
import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import NavDropDown from "./NavDropDown";
import OverflowHidden from "../../components/global/OverflowHidden";
import LogOutModal from "../../components/modals/LogOutModal";
import MobileMenu from "../modals/MobileMenu";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { t } = useTranslation();

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
      <nav
        className={`fixed top-0 w-full z-[8000] md:py-4 py-0 bg-sliverWhite
      ${scrolling ? "border-b-2 border-gray" : ""}`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-16">
              <Link to="/" className="text-black font-bold text-xl py-3">
                <BrandIcon />
              </Link>
              <div className="gap-10 pt-1 lg:flex hidden">
                <a
                  href="#benefits"
                  className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
                >
                  {t("navbar.benefits")}
                </a>
                <a
                  href="#our-courses"
                  className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
                >
                  {t("navbar.our_courses")}
                </a>
                <a
                  href="#our-testimonials"
                  className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
                >
                  {t("navbar.our_testimonials")}
                </a>
                <a
                  href="#faq"
                  className="font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
                >
                  {t("navbar.faq")}
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              {localStorage.getItem("token") ? (
                <NavDropDown
                  open={open}
                  setOpen={setOpen}
                  toggleDropdown={toggleDropdown}
                  setLogOut={() => setLogOut(true)}
                />
              ) : (
                <Link to="/login">
                  <BaseButtonOutline type="button" blue_color="blue_color">
                    {t("navbar.get_started")}
                  </BaseButtonOutline>
                </Link>
              )}

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
        </div>
      </nav>

      {logOut ? (
        <OverflowHidden>
          <LogOutModal setLogOut={() => setLogOut(false)} />
        </OverflowHidden>
      ) : null}
      {mobileOpen ? <MobileMenu close={() => setMobileOpen(false)} /> : null}
    </>
  );
};

export default Navbar;
