import React from "react";

const BaseButton = (props) => {
  return (
    <button
      {...props}
      className={`flex justify-center w-full lg:py-4 py-2.5 lg:px-8 px-4  rounded-[100px] border-none duration-200 lg:text-base text-sm
       font-semibold text-white ${props.className} ${
        props?.blue_color
          ? "bg-dodgerBlue hover:shadow-blueShadow"
          : props?.red_color
          ? "bg-red hover:shadow-redShadow"
          : ""
      }`}
    >
      {props?.children}
    </button>
  );
};

export default BaseButton;
