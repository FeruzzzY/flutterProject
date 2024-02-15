import React from "react";
import CollapseMathIcon from "../../../../icons/CollapseMathIcon";

const CourseProgramTask = ({ color, color2, title, info }) => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-[18px] h-[18px]">
          <CollapseMathIcon color={color} color2={color2} />
        </div>
        <p className="text-xs font-normal text-black line-clamp-2">{title}</p>
      </div>
      <p className="text-xs font-normal text-dodgerBlue bg-blueLight px-3 py-2 rounded-[40px]">
        {info}
      </p>
    </div>
  );
};

export default CourseProgramTask;
