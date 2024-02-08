import React from "react";
import { useTranslation } from "react-i18next";
import { NavigationDashboard } from "../../../components/dashboard-layout";

const Settings = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.settings")} />
      <div className="lg:mt-[90px] mt-[60px] p-6">
        {t("sidebar_links.settings")}
      </div>
    </div>
  );
};

export default Settings;
