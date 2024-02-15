import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux";
import { GetAuthInstance } from "../../../helpers/httpClient";
import CardRounded16 from "../../../components/cards/CardRounded16";
import TextSize20 from "../../../components/texts/TextSize20";
import Table from "../../../components/table/Table";
import { Link } from "react-router-dom";
import Th from "../../../components/table/Th";
import Td from "../../../components/table/Td";
import CustomPagination from "../../../components/global/CustomPagination";
import { NavigationDashboard } from "../../../components/dashboard-layout";

const ProblemSolveList = () => {
  const { t, i18n } = useTranslation();
  const optionsShowPageSize = [
    { value: "20", text: `${t("pagination.show")} 20` },
    { value: "50", text: `${t("pagination.show")} 50` },
    { value: "100", text: `${t("pagination.show")} 100` },
    { value: "200", text: `${t("pagination.show")} 200` },
  ];
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    p_size: optionsShowPageSize[0].value,
    page: 1,
  });
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  //****** Pagination functions start ********/
  const handleShowPageSize = (e) => {
    setObj((pV) => ({
      ...pV,
      p_size: e.target.value,
    }));
    getProblemsList(e.target.value, obj?.page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleGoToPage = (e) => {
    setObj((pV) => ({
      ...pV,
      page: e.target.value,
    }));
    setTypingTimeOut(
      setTimeout(() => {
        getProblemsList(obj?.p_size, e.target.value);
      }, 300)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const toFirstPage = () => {
    setObj((pV) => ({
      ...pV,
      page: 1,
    }));

    getProblemsList(obj?.p_size, 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const singlePrevPage = () => {
    setObj((pV) => ({
      ...pV,
      page: Math.max(obj?.page - 1, 1),
    }));
    getProblemsList(obj?.p_size, Math.max(obj?.page - 1, 1));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const singleNextPage = () => {
    setObj((pV) => ({
      ...pV,
      page: obj?.page + 1,
    }));

    getProblemsList(obj?.p_size, obj?.page + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const toLastPage = () => {
    setObj((pV) => ({
      ...pV,
      page:
        Math.round(count / obj?.p_size) < count / obj?.p_size
          ? Math.round(count / obj?.p_size) + 1
          : Math.round(count / obj?.p_size),
    }));

    getProblemsList(
      obj?.p_size,
      Math.round(count / obj?.p_size) < count / obj?.p_size
        ? Math.round(count / obj?.p_size) + 1
        : Math.round(count / obj?.p_size)
    );
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  //****** Pagination functions end ********/

  const getProblemsList = (showPageSize, page) => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`api/v1/problems?per_page=${showPageSize}&page=${page}`)
      .then((res) => {
        let data = res?.data?.data?.data;
        let total = res?.data?.data?.total;
        setList(data);
        setCount(total);
      })
      .catch((error) => {
        setList([]);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getProblemsList(obj?.p_size, obj?.page);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [i18n.language]);

  return (
    <>
      <NavigationDashboard title={t("sidebar_links.my_courses")} />
      <div className="lg:mt-[90px] mt-[60px] py-5 px-3.5">
        <div className="px-4 py-2 border border-gray inline-flex rounded-[100px] text-sm font-semibold text-grayDark mb-3">
          Lesson 01
        </div>
        <p className={`font-bold md:text-2xl text-lg mb-4`}>
          Matter for this lesson
        </p>
        <CardRounded16>
          <TextSize20>{t("tab_courses.problems")}</TextSize20>
          <Table
            th={
              <tr className="text-left">
                <Th className="!min-w-[40px]">№</Th>
                <Th>{t("my_status_solution.title")}</Th>
                <Th>{t("my_status_solution.status")}</Th>
                <Th></Th>
              </tr>
            }
            td={list?.map((item, index) => {
              return (
                <tr className="text-left" key={index}>
                  <Td className="!min-w-[40px]">{item?.id}</Td>
                  <Td>{item?.title}</Td>
                  <Td>
                    <span
                      className={`py-1 px-2 rounded-lg
                 ${
                   item?.status === -2 ||
                   item?.status === -1 ||
                   item?.status === 5 ||
                   item?.status === 4 ||
                   item?.status === 9
                     ? "text-red bg-redLight"
                     : item?.status === 6 || item?.status === 7
                     ? "text-yellow-400 bg-yellow-100"
                     : item?.status === 8 || item?.status === 0
                     ? "text-green bg-greenLight"
                     : "text-grayDark bg-gray"
                 }`}
                    >
                      {item?.status === -2
                        ? t("status_problem.compile_error")
                        : item?.status === -1
                        ? t("status_problem.wrong_answer")
                        : item?.status === 0
                        ? t("status_problem.accepted")
                        : item?.status === 1
                        ? t("status_problem.time_limit_exceed")
                        : item?.status === 2
                        ? t("status_problem.real_time_limit_exceed")
                        : item?.status === 3
                        ? t("status_problem.memory_limit_exceed")
                        : item?.status === 4
                        ? t("status_problem.runtime_error")
                        : item?.status === 5
                        ? t("status_problem.system_error")
                        : item?.status === 6
                        ? t("status_problem.pending")
                        : item?.status === 7
                        ? t("status_problem.judging")
                        : item?.status === 8
                        ? t("status_problem.partially_accepted")
                        : item?.status === 9
                        ? t("status_problem.compiler_problem_not_found")
                        : item?.status === 10
                        ? t("status_problem.checking")
                        : null}
                    </span>
                  </Td>
                  <Td className="min-w-[150px]">
                    <div className="flex w-full justify-end">
                      <Link
                        to={`/dashboard/problem-solve/${item?.id}`}
                        className="text-dodgerBlue border border-dodgerBlue px-6 py-3 rounded-[120px] duration-150 
                    hover:text-white hover:bg-dodgerBlue"
                      >
                        {t("my_status_solution.solve_now")}
                      </Link>
                    </div>
                  </Td>
                </tr>
              );
            })}
          />

          <CustomPagination
            toFirstPage={toFirstPage}
            singlePrevPage={singlePrevPage}
            singleNextPage={singleNextPage}
            toLastPage={toLastPage}
            obj={obj}
            count={count}
            listData={list}
            handleShowPageSize={handleShowPageSize}
            optionsShowPageSize={optionsShowPageSize}
            handleGoToPage={handleGoToPage}
          />
        </CardRounded16>
      </div>
    </>
  );
};

export default ProblemSolveList;
