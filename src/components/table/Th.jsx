import React from "react";

const Th = (props) => {
  return (
    <th className={`min-w-[130px] py-3 px-1 ${props.className}`}>
      {props.children}
    </th>
  );
};

export default Th;
