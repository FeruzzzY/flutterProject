import React from "react";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ close }) => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden flex">
      <div
        className="bg-black fixed w-full md:h-[calc(100vh_-_96px)] h-[calc(100vh_-_65px)] 
      md:top-[96px] top-[65px] opacity-50 z-[4000] border-t border-gray"
        onClick={close}
      />
      <div
        className="fixed w-[250px] md:h-[calc(100vh_-_96px)] h-[calc(100vh_-_65px)]
      overflow-x-hidden overflow-y-auto md:top-[96px] top-[65px] left-0 bg-grayLight border-r 
      border-t border-gray z-[4002]"
      >
        <div className="pt-1 flex flex-col">
          <a
            href="#benefits"
            onClick={close}
            className="border-b border-gray p-3 font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
          >
            {t("navbar.benefits")}
          </a>
          <a
            href="#our-courses"
            onClick={close}
            className="border-b border-gray p-3 font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
          >
            {t("navbar.our_courses")}
          </a>
          <a
            href="#our-testimonials"
            onClick={close}
            className="border-b border-gray p-3 font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
          >
            {t("navbar.our_testimonials")}
          </a>
          <a
            href="#faq"
            onClick={close}
            className="border-b border-gray p-3 font-semibold text-base text-black duration-150 hover:text-dodgerBlue"
          >
            {t("navbar.faq")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
