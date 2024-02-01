import React from "react";

const Tab = ({ tabList, tab, handleTab }) => {
  return (
    <div>
      <div className="flex overflow-x-auto overflow-y-hidden w-full relative">
        {tabList?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTab(index + 1)}
            className={`relative mr-[61px] last-of-type:mr-0 cursor-pointer z-10 pb-2 border-b border-b-dodgerBlue
            hover:border-b-dodgerBlue hover:text-dodgerBlue duration-150 text-xs font-semibold ${
              tab === index + 1
                ? "text-dodgerBlue border-b-dodgerBlue"
                : "text-grayDark border-b-grayDark"
            }`}
          >
            {item?.title}
          </div>
        ))}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-grayDark z-0" />
      </div>
    </div>
  );
};

export default Tab;
