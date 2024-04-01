import React from "react";
import { useTranslation } from "react-i18next";
import { GetAuthInstance } from "../../../helpers/httpClient";
import CardRounded16 from "../../../components/cards/CardRounded16";
import { useState, useEffect } from "react";
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
import { IMG_URL } from "../../../helpers/api";

const Courses = () => {
  // const [coursesList, setCoursesList] = useState([
  //   {
  //     title: "Dart courses",
  //     progress_course: "40",
  //     modules: [
  //       {
  //         m_title: "Module 1",
  //         m_sub_title: "The first part of Dart courses",
  //         progress_module: "30",
  //         lock: false,
  //       },
  //       {
  //         m_title: "Module 2",
  //         m_sub_title: "The first part of Dart courses",
  //         progress_module: "0",
  //         lock: false,
  //       },
  //       {
  //         m_title: "Module 3",
  //         m_sub_title: "The first part of Dart courses",
  //         progress_module: "0",
  //         lock: true,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Flutter courses",
  //     progress_course: "0",
  //     modules: [
  //       {
  //         m_title: "Module 1",
  //         m_sub_title: "The first part of Flutter courses",
  //         progress_module: "0",
  //         lock: true,
  //       },
  //     ],
  //   },
  // ]);
  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleAccordion = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  // const { t } = useTranslation();

  // *****************************************

  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    GetAuthInstance()
      .get(`/api/v1/course/`)
      .then((res) => {
        setList(res.data.data.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

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
      {/* <NavigationDashboard title={t("sidebar_links.my_courses")} />
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
      </div> */}

      {/* **************************************** */}

      <NavigationDashboard title={t("sidebar_links.my_courses")} />
      <div className="lg:mt-[90px] mt-[60px] p-3.5 pt-[1px]">
        {coursesList.map((item, index) => {
          return (
            <Link key={index} to={`/dashboard/courses/video-part/${item.slug}`}>
              <CardRounded16 className="select-none">
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
            </Link>
          );
        })}
      </div>

      <div className="lg:mt-[90px] mt-[10px] p-3.5 pt-[1px]">
        {list.map((item, index) => {
          return (
            <Link to={`/dashboard/courses/${item.slug}`}>
              <CardRounded16 key={index} className="select-none">
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex gap-3 items-center flex-wrap">
                    <div className="text-base md:text-xl font-bold text-black undefined">
                      {item.name}
                    </div>
                    <p className="px-4 py-2 rounded-[100px]  bg-gray text-base font-semibold text-black">
                      Moduls:  2
                    </p>
                  </div>

                  <div className="flex justify-center items-center w-[100px] h-[100px] ">
                    <img
                      className="rounded-md"
                      src={IMG_URL + item.image}
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div className="flex gap-10 items-center w-full py-8 cursor-pointer group">
                  <div className="flex gap-3">
                    <p
                      className="px-4 py-2 rounded-[100px] 
             border-gray border text-base font-semibold 
             group-hover:text-black group-hover:bg-gray duration-200
            text-grayDark bg-transparent
            "
                    >
                      Module 2
                    </p>
                  </div>
                  <p className="text-base font-semibold text-black ">
                    The second part of <u>DART</u> courses
                  </p>
                </div>
              </CardRounded16>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
