import React from "react";

const BaseButton = (props) => {
  return (
    <button
      {...props}
      className={`flex gap-2 w-full lg:py-4 py-2 lg:px-8 px-4  rounded-[100px] border-none duration-200 lg:text-base text-xs
       font-semibold text-white ${
         props?.blue_color
           ? "bg-dodgerBlue hover:shadow-blueShadow"
           : props?.red_color
           ? "bg-red"
           : ""
       }`}
    >
      {props?.children}
    </button>
  );
};

export default BaseButton;
