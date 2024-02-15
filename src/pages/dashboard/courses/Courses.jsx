import React from "react";
import { useTranslation } from "react-i18next";
import CardRounded16 from "../../../components/cards/CardRounded16";
import { useState } from "react";
import { NavigationDashboard } from "../../../components/dashboard-layout";
import {
  CollapseSubTask,
  CollapseSubText,
  CollapseSubVideo,
  CoursesHeader,
  CoursesUncontrolledHeader,
  UnControlledCollapse,
} from "../../../components/dashboard/courses/main";
import { Link } from "react-router-dom";
import { CourseChat } from "../../../components/dashboard/courses/course_single/course_chat";

const Courses = () => {
  const [coursesList, setCoursesList] = useState([
    {
      title: "Dart courses",
      progress_course: "40",
      modules: [
        {
          m_title: "Module 1",
          m_sub_title: "The first part of Dart courses",
          progress_module: "30",
          lock: false,
        },
        {
          m_title: "Module 2",
          m_sub_title: "The first part of Dart courses",
          progress_module: "0",
          lock: false,
        },
        {
          m_title: "Module 3",
          m_sub_title: "The first part of Dart courses",
          progress_module: "0",
          lock: true,
        },
      ],
    },
    {
      title: "Flutter courses",
      progress_course: "0",
      modules: [
        {
          m_title: "Module 1",
          m_sub_title: "The first part of Flutter courses",
          progress_module: "0",
          lock: true,
        },
      ],
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { t } = useTranslation();

  return (
    <>
      <NavigationDashboard title={t("sidebar_links.my_courses")} />
      <div className="lg:mt-[90px] mt-[60px] p-3.5 pt-[1px]">
        {coursesList.map((item, index) => {
          return (
            <CardRounded16 key={index} className="select-none">
              <CoursesHeader item={item} />

              {item?.modules?.map((item_sub, index_sub) => {
                return (
                  <UnControlledCollapse
                    key={`${index}_${index_sub}`}
                    title={
                      <CoursesUncontrolledHeader
                        item_sub={item_sub}
                        index={`${index}_${index_sub}`}
                        activeIndex={activeIndex}
                      />
                    }
                    item_sub={item_sub}
                    index={`${index}_${index_sub}`}
                    activeIndex={activeIndex}
                    toggleAccordion={() => {
                      if (!item_sub?.lock) {
                        toggleAccordion(`${index}_${index_sub}`);
                      }
                    }}
                  >
                    <div className="flex flex-col gap-8">
                      <Link to="/dashboard/courses/video-part/:id">
                        <CollapseSubVideo />
                      </Link>
                      <Link to="/dashboard/courses/task-part/:id">
                        <CollapseSubTask />
                      </Link>
                      <Link to="/dashboard/courses/text-part/:id">
                        <CollapseSubText />
                      </Link>
                    </div>
                  </UnControlledCollapse>
                );
              })}
            </CardRounded16>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
