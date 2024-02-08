import React from "react";

const BaseButtonOutline = (props) => {
  return (
    <button
      {...props}
      className={`flex justify-center w-full lg:py-4 py-2.5 lg:px-8 px-4 border rounded-[100px] duration-200 lg:text-base text-xs hover:text-white
       font-semibold ${props.className} ${
        props?.blue_color
          ? "border-dodgerBlue text-dodgerBlue hover:bg-dodgerBlue hover:shadow-blueShadow"
          : props?.red_color
          ? "border-red text-red hover:bg-red hover:shadow-redShadow"
          : ""
      }`}
    >
      {props?.children}
    </button>
  );
};

export default BaseButtonOutline;
