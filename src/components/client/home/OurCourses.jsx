import React, { useRef, useState, useEffect } from "react";
import TextSize60 from "../../texts/TextSize60";
import TextSize18 from "../../texts/TextSize18";
import SlidingTab from "../../global/SlidingTab";

const OurCourses = () => {
  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  let allTabs = [
    {
      id: "flutter",
      name: "Flutter",
    },
    {
      id: "dart",
      name: "Dart",
    },
  ];

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div
      className=" md:px-0 px-4  w-full mx-auto flex flex-col gap-7 md:pt-[100px] pt-[60px] md:mb-[80px] mb-[40px]"
      id="benefits"
    >
      <div className="md:max-w-[708px] w-full mx-auto">
        <TextSize60 className="text-center">
          Here's what you'll learn in our course
        </TextSize60>
        <TextSize18 className="text-center text-grayDark md:!px-36 px-0 mb-1">
          Combine courses of different directions
        </TextSize18>
      </div>
      <div className="container">
        <div className="flex justify-center w-full mb-14">
          <SlidingTab
            tabsRef={tabsRef}
            tabUnderlineLeft={tabUnderlineLeft}
            tabUnderlineWidth={tabUnderlineWidth}
            allTabs={allTabs}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
        </div>
        {activeTabIndex === 0 ? (
          <div className="grid grid-cols-2 gap-6 mt-4 min-h-[774px]">
            <div className="lg:col-span-1 col-span-2 flex items-start lg:py-[60px]">
              <div className="flex flex-col justify-center gap-6">
                <div className="md:w-[420px] w-full gap-3 border-b border-b-gray pb-6 last-of-type:border-b-0">
                  <span className="inline-block bg-greenLight rounded-lg py-2 px-3 text-black text-xl font-bold">
                    01
                  </span>
                  <p className="text-2xl text-black font-bold my-3">
                    View video lessons
                  </p>
                  <p className="text-base font-normal text-grayDark">
                    The student is required to go through the video lessons
                    step-by-step on the subject of the course in any field of
                    his choice.
                  </p>
                </div>
                <div className="md:w-[420px] w-full gap-3 border-b border-b-gray pb-6 last-of-type:border-b-0">
                  <span className="inline-block bg-greenLight rounded-lg py-2 px-3 text-black text-xl font-bold">
                    02
                  </span>
                  <p className="text-2xl text-black font-bold my-3">
                    Practical exercises
                  </p>
                  <p className="text-base font-normal text-grayDark">
                    Practical exercises for each subject are given, and if the
                    student completes these exercises, the result is sent to the
                    mentor for review through the system.
                  </p>
                </div>
                <div className="md:w-[420px] w-full gap-3 border-b border-b-gray pb-6 last-of-type:border-b-0">
                  <span className="inline-block bg-greenLight rounded-lg py-2 px-3 text-black text-xl font-bold">
                    03
                  </span>
                  <p className="text-2xl text-black font-bold my-3">
                    Working with mentors
                  </p>
                  <p className="text-base font-normal text-grayDark">
                    In the system, each student has the opportunity to interact
                    with the mentor in the form of text, video and audio.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2 rounded-3xl overflow-hidden">
              <img
                src="/images/ourcourse_bg.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 mt-4 min-h-[774px]">
            <div className="lg:col-span-1 col-span-2 flex items-start lg:py-[60px]">
              <div className="flex flex-col justify-center gap-6">
                <div className="md:w-[420px] w-full gap-3 border-b border-b-gray pb-6 last-of-type:border-b-0">
                  <span className="inline-block bg-greenLight rounded-lg py-2 px-3 text-black text-xl font-bold">
                    01
                  </span>
                  <p className="text-2xl text-black font-bold my-3">
                    View video lessons
                  </p>
                  <p className="text-base font-normal text-grayDark">
                    The student is required to go through the video lessons
                    step-by-step on the subject of the course in any field of
                    his choice.
                  </p>
                </div>
                <div className="md:w-[420px] w-full gap-3 border-b border-b-gray pb-6 last-of-type:border-b-0">
                  <span className="inline-block bg-greenLight rounded-lg py-2 px-3 text-black text-xl font-bold">
                    02
                  </span>
                  <p className="text-2xl text-black font-bold my-3">
                    Practical exercises
                  </p>
                  <p className="text-base font-normal text-grayDark">
                    Practical exercises for each subject are given, and if the
                    student completes these exercises, the result is sent to the
                    mentor for review through the system.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2 rounded-3xl overflow-hidden">
              <img
                src="/images/ourcourse_bg.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurCourses;
