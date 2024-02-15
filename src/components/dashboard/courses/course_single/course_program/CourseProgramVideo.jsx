import React from "react";
import CollapsePlayIcon from "../../../../icons/CollapsePlayIcon";

const CourseProgramVideo = ({ color, color2, title, time }) => {
  return (
    <div className="flex items-center gap-2.5 cursor-pointer justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-[18px] h-[18px]">
          <CollapsePlayIcon color={color} color2={color2} />
        </div>
        <p className="text-xs font-normal text-black line-clamp-2">{title}</p>
      </div>
      <p className="text-xs font-normal text-grayDark2">{time}</p>
    </div>
  );
};

export default CourseProgramVideo;
