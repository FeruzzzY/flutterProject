import React from "react";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
};

export default Layout;
