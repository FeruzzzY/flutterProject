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

const ProblemSolveList = () => {
  const [list, setList] = useState([]);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const getProblemsList = () => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`api/v1/problems`)
      .then((res) => {
        let data = res?.data?.data?.data;
        setList(data);
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getProblemsList();

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
              <Th>Problem number</Th>
              <Th>Title</Th>
              <Th>Status</Th>
              <Th></Th>
            </tr>
          }
          td={list?.map((item, index) => {
            return (
              <tr className="text-left" key={index}>
                <Td>{item?.id}</Td>
                <Td>{item?.title}</Td>
                <Td>
                  <span className="py-1 px-2 text-grayDark bg-gray rounded-lg">
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
      </CardRounded16>
    </>
  );
};

export default ProblemSolveList;
