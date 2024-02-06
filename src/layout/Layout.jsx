import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-sliverWhite">
      <Navbar />
      <div className="mt-[90px]">{children}</div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
