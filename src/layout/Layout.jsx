import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/global/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-sliverWhite">
      <Navbar />
      <div className="mt-[90px]">{children}</div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
