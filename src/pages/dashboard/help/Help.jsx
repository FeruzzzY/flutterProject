import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";

const Help = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.help")} />
      <div className="lg:mt-[70px] mt-[60px] p-6">
        <div className="flex w-full justify-center">
          <div className="md:w-[681px] flex w-full gap-6 flex-col items-center">
            <img
              src="/images/helpBg.png"
              className="w-[200px] h-[200px]"
              alt=""
            />
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-center">
              Do you need help? Contact us.
            </p>
            <div className="text-center text-lg md:text-xl font-medium text-grayDark md:px-10">
              If you have any questions or problems, you can call{" "}
              <a
                href="tel:+998 94 498 12"
                className="inline-flex text-dodgerBlue"
              >
                +998 94 498 12 12
              </a>{" "}
              or write to the{" "}
              <a href="" className="inline-flex text-dodgerBlue">
                @username
              </a>{" "}
              account via Telegram.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
