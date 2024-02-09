import React from "react";
import { NavigationDashboard } from "../../components/dashboard-layout";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.home")} />
      <div className="lg:mt-[70px] mt-[60px] p-6">
        {t("sidebar_links.home")}
      </div>
    </div>
  );
};

export default Dashboard;
