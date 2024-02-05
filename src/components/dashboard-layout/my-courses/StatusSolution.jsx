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

const StatusSolution = ({ id }) => {
  const optionsShowPageSize = [
    { value: "20", text: "show 20" },
    { value: "50", text: "show 50" },
    { value: "100", text: "show 100" },
    { value: "200", text: "show 200" },
  ];
  const [statusMy, setStatusMy] = useState([]);
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    p_size: optionsShowPageSize[0].value,
    page: 1,
  });
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  //****** Pagination functions start ********/
  const handleShowPageSize = (e) => {
    setObj((pV) => ({
      ...pV,
      p_size: e.target.value,
    }));
    getResultStatusAll(e.target.value, obj?.page);
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
        getResultStatusAll(obj?.p_size, e.target.value);
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

    getResultStatusAll(obj?.p_size, 1);
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
    getResultStatusAll(obj?.p_size, Math.max(obj?.page - 1, 1));
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

    getResultStatusAll(obj?.p_size, obj?.page + 1);
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

    getResultStatusAll(
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

  const getResultStatusAll = (showPageSize, page) => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(
        `api/v1/results?problem_id=${id}&per_page=${showPageSize}&page=${page}`
      )
      .then((res) => {
        let data = res?.data?.data?.data;
        let total = res?.data?.data?.total;
        setStatusMy(data);
        setCount(total);
      })
      .catch((error) => {
        setStatusMy([]);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getResultStatusAll(obj?.p_size, obj?.page);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [i18n.language]);

  return (
    <div>
      <TextSize20>Status</TextSize20>
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
        td={statusMy?.map((item, index) => {
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
        listData={statusMy}
        handleShowPageSize={handleShowPageSize}
        optionsShowPageSize={optionsShowPageSize}
        handleGoToPage={handleGoToPage}
      />
    </div>
  );
};

export default StatusSolution;
