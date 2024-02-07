import React from "react";

const TextSize20 = (props) => {
  return (
    <div
      className={`md:text-xl text-lg font-bold text-black ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export default TextSize20;
