import React, { useState } from "react";
import Table from "../../table/Table";
import TextSize20 from "../../texts/TextSize20";
import Th from "../../table/Th";
import Td from "../../table/Td";
import CustomPagination from "../../global/CustomPagination";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
const MyStatusSolution = ({
  setObj,
  obj,
  getResultStatusMyPagination,
  statusMyPagination,
  count,
  optionsShowPageSize,
}) => {
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  //****** Pagination functions start ********/
  const handleShowPageSize = (e) => {
    setObj((pV) => ({
      ...pV,
      p_size: e.target.value,
    }));
    getResultStatusMyPagination(e.target.value, obj?.page);
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
        getResultStatusMyPagination(obj?.p_size, e.target.value);
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

    getResultStatusMyPagination(obj?.p_size, 1);
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
    getResultStatusMyPagination(obj?.p_size, Math.max(obj?.page - 1, 1));
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

    getResultStatusMyPagination(obj?.p_size, obj?.page + 1);
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

    getResultStatusMyPagination(
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

  return (
    <div>
      <TextSize20>{t("my_status_solution.my_status")}</TextSize20>
      <Table
        th={
          <tr className="text-left">
            <Th className="!min-w-[40px]">{t("my_status_solution.id")}</Th>
            <Th>{t("my_status_solution.user")}</Th>
            <Th>{t("my_status_solution.problem_id")}</Th>
            <Th>{t("my_status_solution.name")}</Th>
            <Th>{t("my_status_solution.status")}</Th>
          </tr>
        }
        td={statusMyPagination?.map((item, index) => {
          return (
            <tr className="text-left" key={index}>
              <Td className="!min-w-[40px]">{item?.id}</Td>
              <Td className="">{item?.user?.name}</Td>
              <Td className="">{item?.problem_id}</Td>
              <Td className="">{item?.compiler?.display_name}</Td>
              <Td className="">
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
        listData={statusMyPagination}
        handleShowPageSize={handleShowPageSize}
        optionsShowPageSize={optionsShowPageSize}
        handleGoToPage={handleGoToPage}
      />
    </div>
  );
};

export default MyStatusSolution;
