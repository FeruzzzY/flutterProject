import React, { useState } from "react";

const UnControlledCollapseProgram = ({
  title,
  children,
  activeIndex,
  index,
  toggleAccordion,
}) => {
  return (
    <div className="border-b border-gray first-of-type:border-t last-of-type:border-b-0">
      <div
        className={`w-full py-4 cursor-pointer group`}
        onClick={toggleAccordion}
      >
        {title}
      </div>
      {activeIndex === index && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default UnControlledCollapseProgram;
