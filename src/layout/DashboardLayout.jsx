import React from "react";
import { SideBar, NavigationDashboard } from "../components/dashboard-layout";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const { loading } = useSelector((state) => state);
  return (
    <>
      {loading ? <Loading /> : ""}
      <div className="flex w-full">
        <div className="fixed top-0 left-0 z-[99] lg:w-[300px] lg:block hidden">
          <SideBar />
        </div>
        <div className="lg:ml-[300px] lg:w-[calc(100%_-_300px)] w-full">
          <NavigationDashboard />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
