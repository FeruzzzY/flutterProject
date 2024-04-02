import React from "react";
import CollapsePlayIcon from "../../../icons/CollapsePlayIcon";
import CollapseWatchIcon from "../../../icons/CollapseWatchIcon";
import { convertMilliseconds } from "../../../../helpers/another_functions";

const CollapseSubVideo = ({ f_lesson }) => {
  const time = convertMilliseconds(f_lesson?.video_link?.expires);
  return (
    <div className="group flex justify-between items-center cursor-pointer w-full gap-3 md:border-0 border border-gray md:rounded-none rounded-xl md:p-0 p-2">
      <div className="flex md:flex-row flex-col items-center gap-3 w-full">
        <div className="md:w-[311px] w-full flex justify-center items-center relative">
          <div className="md:w-auto w-full md:h-auto h-full items-center md:relative absolute top-0 left-0 md:inline flex justify-center">
            <div className="w-[60px]">
              <div
                className="w-[48px] h-[48px] border border-gray flex justify-center items-center rounded-full cursor-pointer
                md:bg-transparent bg-gray
              group-hover:bg-gray duration-200"
              >
                <CollapsePlayIcon />
              </div>
            </div>
          </div>
          <div className="md:w-[212px] w-full">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <div>
            <div className="flex flex-wrap gap-2">
              <p
                className={`inline-flex px-4 py-2 rounded-[100px] mb-2
             border-gray border text-base font-semibold 
             group-hover:text-black group-hover:bg-gray duration-200
             text-grayDark bg-transparent
            `}
              >
                {f_lesson?.desc}
              </p>
              <div className="md:hidden gap-1 items-center flex mb-2">
                <CollapseWatchIcon />
                <p className="text-sm font-medium text-grayDark">
                  {time.hours}:{time.minutes}:{time.seconds}
                </p>
              </div>
            </div>
            <p className="text-base font-semibold text-black line-clamp-3">
              {f_lesson?.name}
            </p>
          </div>
        </div>
        <div className="md:flex gap-1 items-center hidden">
          <CollapseWatchIcon />
          <p className="text-sm font-medium text-grayDark">
            {time.hours}:{time.minutes}:{time.seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollapseSubVideo;
