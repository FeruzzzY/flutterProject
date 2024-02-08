import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-sliverWhite">
      <Navbar />
      <div className="mt-[90px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
