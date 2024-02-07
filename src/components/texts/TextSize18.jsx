import React from "react";

const TextSize18 = (props) => {
  return (
    <div
      className={`md:text-lg text-base font-medium text-black ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export default TextSize18;
