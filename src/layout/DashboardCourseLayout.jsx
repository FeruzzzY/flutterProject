import React, { useEffect } from "react";
import { NavigationDashboard } from "../components/dashboard-layout";
import { useTranslation } from "react-i18next";
import { CourseProgram } from "../components/dashboard/courses/course_single/course_program";
import { CourseChat } from "../components/dashboard/courses/course_single/course_chat";

const DashboardCourseLayout = ({ children }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <NavigationDashboard title={t("sidebar_links.my_courses")} />
      <div className="flex md:flex-row flex-col w-full lg:mt-[90px] mt-[60px] py-5 px-3.5">
        <div className="md:w-[calc(100%_-_300px)] w-full md:order-1 order-2 md:pr-6 md:pt-0 pt-9">
          {children}
        </div>
        <div
          className="md:w-[300px] fixed md:right-[24px] md:left-auto left-0 md:top-auto 
          top-[65px] w-full md:rounded-2xl rounded-none overflow-hidden md:order-2 order-1"
        >
          {/* <CourseProgram /> */}
          <CourseChat />
        </div>
      </div>
    </>
  );
};

export default DashboardCourseLayout;
