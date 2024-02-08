import React from "react";
import BaseButton from "../../buttons/BaseButton";
import PotentialIcon1 from "../../icons/PotentialIcon1";
import PotentialIcon2 from "../../icons/PotentialIcon2";
import { Link } from "react-router-dom";

const UnlockPotential = () => {
  return (
    <div className="pb:mb-[70px] pb-[30px] pt-4 select-none">
      <div className="container">
        <div className="relative rounded-[28px] overflow-hidden w-full h-full">
          <img
            src="/images/Hero.png"
            className="absolute z-10 w-full h-full top-0 left-0"
            alt=""
          />
          <div className="absolute z-[11] w-full h-full top-0 left-0 border-2 border-gray rounded-[28px]" />
          <div className="relative z-[12] flex flex-col items-center md:gap-5 gap-2.5 p-5 justify-center md:min-h-[642px] min-h-[370px] w-full">
            <div
              className="inline-flex gap-2.5 items-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-black sm:p-3.5 p-1.5 
             rounded-[11px] relative bg-grayLight border border-gray"
            >
              <div className="absolute sm:top-[-29px] sm:left-[-25px] top-[-25px] left-[-15px]">
                <PotentialIcon2 className="sm:w-auto w-[25px]" />
              </div>
              <PotentialIcon1 />
              <p className="pr-3">
                <span className="text-dodgerBlue">Unlock</span> Your Creative
                Potential
              </p>
            </div>
            <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-black text-center">
              with Online Design and Development Courses.
            </p>
            <p className="text-base md:text-xl font-medium text-grayDark text-center">
              Learn from Industry Experts and Enhance Your Skills.
            </p>

            {localStorage.getItem("token") ? (
              <Link to="/dashboard/settings">
                <BaseButton
                  type="button"
                  blue_color="blue_color"
                  className="!w-[278px]"
                >
                  Start now
                </BaseButton>
              </Link>
            ) : (
              <Link to="/login">
                <BaseButton
                  type="button"
                  blue_color="blue_color"
                  className="!w-[278px]"
                >
                  Start now
                </BaseButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockPotential;
