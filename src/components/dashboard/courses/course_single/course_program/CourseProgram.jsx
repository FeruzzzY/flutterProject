import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  CourseProgramTask,
  CourseProgramText,
  CourseProgramVideo,
  CoursesUncontrolledHeaderProgram,
  UnControlledCollapseProgram,
} from "./";

const CourseProgram = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "Introduction",
    },
    {
      title: "Dart Syntax I",
    },
    {
      title: "Dart Syntax II",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const { t } = useTranslation();

  useLayoutEffect(() => {
    const updateSize = () => {
      const body = document.body;
      const { width, height } = body.getBoundingClientRect();
      setWindowSize({ width, height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      <div
        className="select-none bg-white md:rounded-2xl rounded-none md:border border-b 
      border-gray md:px-4 md:pt-3 px-3 pt-2 lg:max-h-[calc(100vh_-_120px)] 
      max-h-[calc(100vh_-_90px)] overflow-y-auto overflow-x-hidden"
      >
        <p
          className="flex justify-between items-center md:pb-4 pb-2 
         text-sm md:text-xl font-bold text-black md:cursor-auto cursor-pointer"
          onClick={() => {
            if (windowSize?.width <= 768) {
              setMenu(!menu);
            }
          }}
        >
          <span>Course program</span>{" "}
          <span className="md:hidden flex">
            {menu ? (
              <HiOutlineMenuAlt2 color="#2A85FF" size="30" />
            ) : (
              <HiOutlineMenuAlt3
                color="#2A85FF"
                onClick={() => setActiveIndex(0)}
                size="30"
              />
            )}
          </span>
        </p>

        <div
          className={
            windowSize?.width <= 768
              ? `${menu ? "block" : "hidden"}`
              : "md:block hidden"
          }
        >
          {coursesList?.map((item_sub, index_sub) => {
            return (
              <UnControlledCollapseProgram
                key={index_sub}
                title={
                  <CoursesUncontrolledHeaderProgram
                    item_sub={item_sub}
                    index={index_sub}
                    activeIndex={activeIndex}
                  />
                }
                item_sub={item_sub}
                index={index_sub}
                activeIndex={activeIndex}
                toggleAccordion={() => toggleAccordion(index_sub)}
              >
                <div className="flex flex-col gap-4 pl-8 pt-2.5">
                  <CourseProgramVideo
                    color="#2A85FF"
                    color2="#E8F7FA"
                    title="What is programming?"
                    time="22:11"
                  />
                  <CourseProgramVideo title="About Flutter" time="22:11" />
                  <CourseProgramVideo
                    title="Write code in flutter language"
                    time="22:11"
                  />
                  <CourseProgramTask
                    title="Matter for this lesson"
                    info="Easy"
                  />
                  <CourseProgramText
                    title="Create E-Commerce app"
                    info="Easy"
                  />
                </div>
              </UnControlledCollapseProgram>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
