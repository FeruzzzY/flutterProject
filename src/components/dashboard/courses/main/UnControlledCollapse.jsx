import React, { useState } from "react";

const UnControlledCollapse = ({
  title,
  children,
  activeIndex,
  index,
  toggleAccordion,
  item_sub,
}) => {
  return (
    <div className="border-b border-gray last-of-type:border-b-0">
      <div
        className={`w-full py-8 cursor-pointer group`}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      {activeIndex === index && <div className="pb-8">{children}</div>}
    </div>
  );
};

export default UnControlledCollapse;
