import React from "react";
import TextSize60 from "../../texts/TextSize60";
import TextSize18 from "../../texts/TextSize18";
import TextSize20 from "../../texts/TextSize20";
import { Link } from "react-router-dom";

const EducationalProcces = () => {
  return (
    <div
      className=" md:px-0 px-4 overflow-hidden w-full mx-auto flex flex-col gap-7 md:pt-[100px] pt-[60px]"
      id="our-courses"
    >
      <div className="md:max-w-[708px] w-full mx-auto">
        <TextSize60 className="text-center">
          Create your own educational procces
        </TextSize60>
        <TextSize18 className="text-center text-grayDark md:!px-36 px-0 mb-1">
          Combine courses of different directions
        </TextSize18>
      </div>
      <div className="container">
        <div className="grid grid-cols-6 lg:gap-6 lg:mt-6 pb-[90px]">
          <div className="flex gap-6 justify-between xl:col-span-2 lg:col-span-3 col-span-6 rounded-2xl lg:p-6 relative">
            <img
              src="/images/schoolbag1.png"
              className="absolute w-[300px] h-[300px] top-0 lg:left-[-140px] left-[-120px]"
              alt=""
            />
            <div className="md:w-[120px] md:h-[120px] lg:flex hidden" />
            <div className="lg:mt-0 mt-[150px]">
              <p className="text-xl font-semibold text-black mt-2 mb-4">
                Flutter development skills
              </p>
              <Link to="" className="bg-blueLight py-2.5 px-4 rounded-[100px]">
                Amazing courses
              </Link>
            </div>
          </div>
          <div className="flex gap-6 justify-between xl:col-span-2 lg:col-span-3 col-span-6 rounded-2xl lg:p-6 relative">
            <img
              src="/images/schoolbag2.png"
              className="absolute w-[300px] h-[300px] top-0 left-[-140px]"
              alt=""
            />
            <div className="md:w-[120px] md:h-[120px] lg:flex hidden" />
            <div className="lg:mt-0 mt-[150px]">
              <p className="text-xl font-semibold text-black mt-2 mb-4">
                Flutter development skills
              </p>
              <Link to="" className="bg-blueLight py-2.5 px-4 rounded-[100px]">
                Only for you
              </Link>
            </div>
          </div>
          <div className="flex gap-6 justify-between xl:col-span-2 lg:col-span-3 col-span-6 rounded-2xl lg:p-6 relative">
            <img
              src="/images/schoolbag3.png"
              className="absolute w-[300px] h-[300px] top-0 left-[-140px]"
              alt=""
            />
            <div className="md:w-[120px] md:h-[120px] lg:flex hidden" />
            <div className="lg:mt-0 mt-[150px]">
              <p className="text-xl font-semibold text-black mt-2 mb-4">
                Flutter development skills
              </p>
              <Link to="" className="bg-blueLight py-2.5 px-4 rounded-[100px]">
                Simple
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalProcces;
