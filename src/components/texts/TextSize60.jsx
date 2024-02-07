import React from "react";

const TextSize60 = (props) => {
  return (
    <div
      className={`lg:text-[60px] md:text-[40px] text-[30px] font-bold text-black ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export default TextSize60;
