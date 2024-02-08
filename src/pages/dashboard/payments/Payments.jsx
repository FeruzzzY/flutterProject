import React from "react";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import { useTranslation } from "react-i18next";

const Payments = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavigationDashboard title={t("sidebar_links.payments")} />
      <div className="lg:mt-[90px] mt-[60px] p-6">
        {t("sidebar_links.payments")}
      </div>
    </div>
  );
};

export default Payments;
