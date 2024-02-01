import React from "react";

const Td = (props) => {
  return (
    <td
      className={`min-w-[130px] py-5 text-sm font-medium text-black border-t border-t-gray border-b border-b-gray bg-grayLight mb-3 px-2 ${props.className}`}
    >
      {props.children}
    </td>
  );
};

export default Td;
