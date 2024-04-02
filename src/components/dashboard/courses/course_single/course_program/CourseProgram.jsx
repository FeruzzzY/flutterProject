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
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../../redux";
import { GetAuthInstance } from "../../../../../helpers/httpClient";
import { useEffect } from "react";

const CourseProgram = () => {
  const { courses_slug, courses_id, c_item_sub_index, c_child_s_id } =
    useParams();
  const [programList, setProgramList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menu, setMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  useEffect(() => {
    getCourseProgram();
    setActiveIndex(c_item_sub_index);
  }, []);

  const getCourseProgram = () => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`/api/v1/course/sections?slug=${courses_slug}`)
      .then((res) => {
        let data = res?.data?.data;
        setProgramList(data);
      })
      .catch((error) => {
        setProgramList([]);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
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
          {programList?.map((item_sub, index_sub) => {
            return (
              <UnControlledCollapseProgram
                key={index_sub}
                title={
                  <CoursesUncontrolledHeaderProgram
                    item_sub={item_sub}
                    index={index_sub}
                    activeIndex={Number(activeIndex)}
                  />
                }
                item_sub={item_sub}
                index={index_sub}
                activeIndex={Number(activeIndex)}
                toggleAccordion={() => toggleAccordion(index_sub)}
              >
                {item_sub?.childs?.map((ch, index_ch) => {
                  return (
                    <div key={index_ch}>
                      {ch?.lessons?.length > 0 && (
                        <div className="flex flex-col gap-4 pl-8 pt-2.5">
                          {ch?.lessons[0]?.lesson_type === 1 ? (
                            <Link
                              to={`/dashboard/courses/video-part/${courses_slug}/${courses_id}/${index_sub}/${ch?.id}`}
                            >
                              <CourseProgramVideo
                                color={
                                  ch?.id === Number(c_child_s_id)
                                    ? "#2A85FF"
                                    : ""
                                }
                                color2={
                                  ch?.id === Number(c_child_s_id)
                                    ? "#E8F7FA"
                                    : ""
                                }
                                title={ch?.lessons[0]?.name}
                                time="22:11"
                              />
                            </Link>
                          ) : ch?.lessons[0]?.lesson_type === 3 ? (
                            <Link to="/dashboard/courses/task-part/:id">
                              <CourseProgramTask
                                title={ch?.lessons[0]?.name}
                                info="Easy"
                              />
                            </Link>
                          ) : ch?.lessons[0]?.lesson_type === 4 ? (
                            <Link to="/dashboard/courses/text-part/:id">
                              <CourseProgramText
                                title={ch?.lessons[0]?.name}
                                info="Easy"
                              />
                            </Link>
                          ) : null}
                        </div>
                      )}
                    </div>
                  );
                })}
              </UnControlledCollapseProgram>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseProgram;
