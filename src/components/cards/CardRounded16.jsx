import React from "react";

const CardRounded16 = (props) => {
  return (
    <div
      {...props}
      className={`my-6 bg-white rounded-2xl border border-gray p-6 ${props.className}`}
    >
      {props?.children}
    </div>
  );
};

export default CardRounded16;
