import React, { Fragment, useEffect, useState } from "react";
import { TitleCabinet } from "../../../components/global";
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

const ProblemSolveList = () => {
  const optionsShowPageSize = [
    { value: "20", text: "show 20" },
    { value: "50", text: "show 50" },
    { value: "100", text: "show 100" },
    { value: "200", text: "show 200" },
  ];
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    p_size: optionsShowPageSize[0].value,
    page: 1,
  });
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const [list, setList] = useState([]);
  const { t, i18n } = useTranslation();
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
      <div className="px-4 py-2 border border-gray inline-flex rounded-[100px] text-sm font-semibold text-grayDark mb-3">
        Lesson 01
      </div>
      <TitleCabinet title="Matter for this lesson" />

      <CardRounded16>
        <TextSize20>Problems</TextSize20>
        <Table
          th={
            <tr className="text-left">
              <Th className="!min-w-[40px]">№</Th>
              <Th>Title</Th>
              <Th>Status</Th>
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
                <Td className="min-w-[150px]">
                  <div className="flex w-full justify-end">
                    <Link
                      to={`/dashboard/problem-solve/${item?.id}`}
                      className="text-dodgerBlue border border-dodgerBlue px-6 py-3 rounded-[120px] duration-150 
                    hover:text-white hover:bg-dodgerBlue"
                    >
                      Solve now
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
    </>
  );
};

export default ProblemSolveList;
