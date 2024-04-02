import React from "react";
import CollapsePlusIcon from "../../../../icons/CollapsePlusIcon";
import CollapseMinusIcon from "../../../../icons/CollapseMinusIcon";

const CoursesUncontrolledHeaderProgram = ({ activeIndex, item_sub, index }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div>
          {activeIndex === index ? <CollapseMinusIcon /> : <CollapsePlusIcon />}
        </div>
        <p className="text-sm font-medium text-black">{item_sub?.name}</p>
      </div>
    </>
  );
};

export default CoursesUncontrolledHeaderProgram;
