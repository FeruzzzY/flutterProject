import React from "react";
import TextSize60 from "../../texts/TextSize60";
import TextSize18 from "../../texts/TextSize18";
import TextSize20 from "../../texts/TextSize20";

const OurCoursesApply = () => {
  return (
    <div className="bg-white md:px-0 px-4  w-full mx-auto flex flex-col gap-7 md:pt-[100px] pt-[60px] pb:mb-[100px] pb-[60px]">
      <div className="md:max-w-[708px] w-full mx-auto">
        <TextSize60 className="text-center">
          Our course who does this apply to?
        </TextSize60>
        <TextSize18 className="text-center text-grayDark md:!px-36 px-0 mb-1">
          Combine courses of different directions
        </TextSize18>
      </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 p-6 rounded-2xl bg-greenLight">
            <div className="w-[40px]">
              <img src="/images/ApplyIcon1.png" className="mb-10" alt="" />
            </div>
            <div>
              <TextSize20 className="!text-base">
                It wants to start from 0 to those who
              </TextSize20>
              <p className="text-base font-normal text-grayDark mt-2">
                Anyone with no programming knowledge can learn programming.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 p-6 rounded-2xl bg-orangeColor">
            <div className="w-[40px]">
              <img src="/images/ApplyIcon2.png" className="mb-10" alt="" />
            </div>
            <TextSize20 className="!text-base">
              Basic knowledge to those who have
            </TextSize20>
            <p className="text-base font-normal text-grayDark mt-2">
              Prospective programmers with basic knowledge in this course have
              the opportunity to take.
            </p>
          </div>
          <div className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 p-6 rounded-2xl bg-blueLight">
            <div className="w-[40px]">
              <img src="/images/ApplyIcon3.png" className="mb-10" alt="" />
            </div>
            <TextSize20 className="!text-base">
              Primary computer to those who are literate
            </TextSize20>
            <p className="text-base font-normal text-grayDark mt-2">
              If you have an understanding of how to communicate with a
              computer, then programming is.
            </p>
          </div>
          <div className="flex flex-col justify-between xl:col-span-1 md:col-span-2 col-span-4 p-6 rounded-2xl bg-greenLight">
            <div className="w-[40px]">
              <img src="/images/ApplyIcon4.png" className="mb-10" alt="" />
            </div>
            <TextSize20 className="!text-base">
              Strong patience and passion to people who haves
            </TextSize20>
            <p className="text-base font-normal text-grayDark mt-2">
              If you consider yourself to be a patient and self-motivated person
              with regard to any.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoursesApply;
