import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CollapsePlusIcon from "../../../icons/CollapsePlusIcon";
import CollapseMinusIcon from "../../../icons/CollapseMinusIcon";
import CollapseClockIcon from "../../../icons/CollapseClockIcon";

const CoursesUncontrolledHeader = ({ activeIndex, item_sub, index }) => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-col gap-3 items-start flex-wrap">
          <div className="flex gap-3">
            <p
              className={`px-4 py-2 rounded-[100px] 
             border-gray border text-base font-semibold 
             group-hover:text-black group-hover:bg-gray duration-200
            ${
              activeIndex === index
                ? "text-black bg-gray"
                : "text-grayDark bg-transparent"
            }
            `}
            >
              {item_sub?.m_title}
            </p>
            {item_sub?.lock ? (
              <div
                className={`px-4 py-2 rounded-[100px] 
             border-gray border text-base font-semibold 
             group-hover:text-black group-hover:bg-gray duration-200 
            `}
              >
                <CollapseClockIcon />
              </div>
            ) : null}
          </div>
          <p className="text-base font-semibold text-black">
            {item_sub?.m_sub_title}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[48px]">
            <CircularProgressbar
              value={item_sub?.progress_module}
              text={`${item_sub?.progress_module}%`}
              styles={buildStyles({
                strokeLinecap: "butt",
                textColor: "#23262F",
                pathColor: "#23262F",
                trailColor: " #E8E9EB",
                textSize: "25px",
              })}
            />
          </div>
          <div
            className="w-[48px] h-[48px] rounded-full border border-gray
            flex justify-center items-center"
          >
            {activeIndex === index ? (
              <CollapseMinusIcon />
            ) : (
              <CollapsePlusIcon />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesUncontrolledHeader;
