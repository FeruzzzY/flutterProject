import React from "react";
import { BrandIcon } from "../components/svg/BrandIcon";

const Loading = () => {
  return (
    <div className="fixed bg-sliverWhite z-[999] h-svh top-0 left-0 w-full">
      <div className="flex items-center h-svh justify-center">
        <div className="flex justify-center items-center">
          <BrandIcon />
          <span className="text-2xl font-extrabold">...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
