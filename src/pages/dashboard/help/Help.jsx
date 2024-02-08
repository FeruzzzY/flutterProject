import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";

const Help = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.help")} />
      <div className="lg:mt-[90px] mt-[60px] p-6">
        {t("sidebar_links.help")}
      </div>
    </div>
  );
};

export default Help;
