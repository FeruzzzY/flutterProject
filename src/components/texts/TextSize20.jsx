import React from "react";

const TextSize20 = (props) => {
  return (
    <div
      {...props}
      className={`text-base md:text-xl font-bold text-black ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export default TextSize20;
