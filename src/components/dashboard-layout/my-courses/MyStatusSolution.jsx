import React, { useEffect, useState } from "react";
import Table from "../../table/Table";
import TextSize20 from "../../texts/TextSize20";
import Th from "../../table/Th";
import Td from "../../table/Td";
import CustomPagination from "../../global/CustomPagination";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLoading } from "../../../redux";

const MyStatusSolution = ({
  setObj,
  obj,
  getResultStatusMyPagination,
  statusMyPagination,
  count,
  optionsShowPageSize,
}) => {
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const { i18n } = useTranslation();
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
      <TextSize20>My Status</TextSize20>
      <Table
        th={
          <tr className="text-left">
            <Th className="!min-w-[40px]">ID</Th>
            <Th>User</Th>
            <Th>Problem ID</Th>
            <Th>Name</Th>
            <Th>State</Th>
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
                    ? "Compile Error"
                    : item?.status === -1
                    ? "Wrong Answer"
                    : item?.status === 0
                    ? "Accepted"
                    : item?.status === 1
                    ? "Time Limit Exceed"
                    : item?.status === 2
                    ? "Real Time Limit Exceed"
                    : item?.status === 3
                    ? "Memory Limit Exceed"
                    : item?.status === 4
                    ? "Runtime Error"
                    : item?.status === 5
                    ? "System Error"
                    : item?.status === 6
                    ? "Pending"
                    : item?.status === 7
                    ? "Judging"
                    : item?.status === 8
                    ? "Partially Accepted"
                    : item?.status === 9
                    ? "Compiler or problem or contest not found"
                    : item?.status === 10
                    ? "Checking"
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
