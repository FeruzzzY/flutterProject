import React from "react";
import { SideBar, NavigationDashboard } from "../components/dashboard-layout";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-[calc(100%_-_350px)]">
        <NavigationDashboard />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
