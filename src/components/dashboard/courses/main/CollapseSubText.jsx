import React from "react";
import CollapseTaskIcon from "../../../icons/CollapseTaskIcon";
import CollapseWatchIcon from "../../../icons/CollapseWatchIcon";

const CollapseSubText = () => {
  return (
    <div className="group flex justify-between items-center cursor-pointer w-full gap-3 md:border-0 border border-gray md:rounded-none rounded-xl md:p-0 p-2">
      <div className="flex md:flex-row flex-col items-center gap-3 w-full">
        <div className="md:w-[60px] w-full md:flex hidden justify-center items-center relative">
          <div className="md:w-auto w-full md:h-auto h-full items-center md:inline flex">
            <div className="w-[60px]">
              <div
                className="w-[48px] h-[48px] border border-gray flex justify-center items-center rounded-full cursor-pointer
                md:bg-transparent bg-gray
              group-hover:bg-gray duration-200"
              >
                <CollapseTaskIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <p
                className={`inline-flex px-4 py-2 rounded-[100px]
             border-gray border text-base font-semibold 
             group-hover:text-black group-hover:bg-gray duration-200
             text-grayDark bg-transparent
            `}
              >
                Information for lesson 1
              </p>
              <div className="md:hidden gap-1 items-center flex">
                <p className="text-sm font-medium text-dodgerBlue bg-blueLight inline-flex px-4 py-2 rounded-[100px]">
                  Easy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex gap-1 items-center hidden">
          <p className="text-sm font-medium text-dodgerBlue bg-blueLight inline-flex px-4 py-2 rounded-[100px]">
            Easy
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollapseSubText;
