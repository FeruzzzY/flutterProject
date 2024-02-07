import React from "react";
import CloseFaq from "../icons/CloseFaq";
import OpenFaq from "../icons/OpenFaq";

const CustomAccardion = ({ index, item, activeIndex, toggleAccordion }) => {
  return (
    <div className="bg-white border border-gray rounded-xl">
      <button
        className="flex justify-between gap-4 items-center w-full md:py-7 md:px-10 py-2 px-4 text-left focus:outline-none"
        onClick={() => toggleAccordion(index)}
      >
        <span className="text-black md:text-[20px] text-base font-semibold">
          {item.title}
        </span>
        {activeIndex === index ? (
          <span className="md:w-[44px] w-[30px]">
            <CloseFaq />
          </span>
        ) : (
          <span className="md:w-[44px] w-[30px]">
            <OpenFaq />
          </span>
        )}
      </button>
      {activeIndex === index && (
        <div className="md:text-lg text-sm md:px-10 px-4 font-normal">
          <div className="md:py-7 py-2 border-t border-t-gray text-grayDark">
            {item.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomAccardion;
