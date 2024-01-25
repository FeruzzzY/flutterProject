import React from "react";
import { SideBar } from "../components/dashboard-layout";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
