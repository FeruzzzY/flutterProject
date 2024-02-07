import React from "react";
import ExpertBgIcon from "../../icons/ExpertBgIcon";
import BaseButton from "../../buttons/BaseButton";

const ExpertSection = () => {
  return (
    <div className="md:pt-[100px] pt-[60px] md:mb-[80px] mb-[40px]">
      <div className="container ">
        <div className="bg-greenLight grid grid-cols-9 lg:gap-6 gap-0 rounded-2xl">
          <div className="lg:col-span-6 col-span-9 md:pl-[84px] md:py-[48px] sm:p-9 p-6">
            <p className="md:text-[42px] md:leading-[4rem] text-2xl font-bold text-black">
              We help you become an expert in your field
            </p>
            <p className="md:text-xl text-lg font-medium text-grayDark md:w-[458px] w-full mt-4">
              Request a free consultation and we will help you make the right
              choice
            </p>
            <BaseButton
              className="inline-flex justify-center sm:w-[287px] w-full mt-4"
              blue_color="blue_color"
            >
              Get advice
            </BaseButton>
          </div>
          <div className="lg:col-span-3 col-span-9 w-full p-1">
            <ExpertBgIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
