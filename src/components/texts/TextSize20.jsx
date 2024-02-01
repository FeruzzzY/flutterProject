import React from "react";

const TextSize20 = (props) => {
  return (
    <div className={`text-xl font-bold text-black ${props.className}`}>
      {props?.children}
    </div>
  );
};

export default TextSize20;
