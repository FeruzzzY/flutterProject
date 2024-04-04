import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TextSize20 from "../../../texts/TextSize20";

const CoursesHeader = ({ item }) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div className="flex gap-3 items-center flex-wrap">
        <TextSize20>{item?.name}</TextSize20>
        <p
          className="px-4 py-2 rounded-[100px] 
          bg-gray text-base font-semibold text-black"
        >
          Moduls: {item?.sections?.length}
        </p>
      </div>
      <div className="flex items-center gap-3 border border-gray p-2 pr-5 rounded-[120px]">
        <div className="w-[48px]">
          <CircularProgressbar
            // value={item?.progress_course}
            // text={`${item?.progress_course}%`}
            value={55}
            text={`${55}%`}
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "#23262F",
              pathColor: "#43D58F",
              trailColor: " #E8E9EB",
              textSize: "25px",
            })}
          />
        </div>
        <div>
          <p className="text-base font-semibold text-black">Course progress</p>
          <p className="text-sm font-medium text-grayDark">
            {item?.hours} hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
