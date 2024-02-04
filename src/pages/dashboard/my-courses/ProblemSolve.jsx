import React, { useEffect, useState } from "react";
import { TitleCabinet, Tab } from "../../../components/global";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux";
import { GetAuthInstance } from "../../../helpers/httpClient";
import { ProblemsTab } from "../../../components/dashboard-layout/my-courses";
import CouldNotSolve from "../../../components/dashboard-layout/my-courses/CouldNotSolve";
import CardRounded16 from "../../../components/cards/CardRounded16";
import { useParams } from "react-router-dom";
import Back from "../../../components/Back";
import ProblemsSubmit from "../../../components/dashboard-layout/my-courses/ProblemsSubmit";
import TextSize20 from "../../../components/texts/TextSize20";
import { formatBytes } from "../../../helpers/another_functions";

const ProblemSolve = () => {
  const [tab, setTab] = useState(1);
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleTab = (i) => setTab(i);
  const tabList = [
    {
      title: "Problems",
    },
    {
      title: "Submit",
    },
    {
      title: "Status",
    },
    {
      title: "My status",
    },
    {
      title: "Comments",
    },
  ];

  const getProblems = () => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`api/v1/problem/${id}`)
      .then((res) => {
        let data = res?.data?.data;
        setDetail(data);
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getProblems();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [i18n.language]);

  return (
    <>
      <Back link="/dashboard/problem-solve" />
      <div className="px-4 py-2 border border-gray inline-flex rounded-[100px] text-sm font-semibold text-grayDark mb-3">
        Lesson 01
      </div>
      <TitleCabinet title="Matter for this lesson" />
      <Tab tabList={tabList} handleTab={handleTab} tab={tab} />

      <CardRounded16>
        <TextSize20>
          {detail?.id}.{detail?.title}
        </TextSize20>
        <div className=" mt-2 pb-4 border-b border-b-gray">
          <p className="text-xs font-medium text-black">
            <span className="text-grayDark">Time limit: </span>:{" "}
            {detail?.time_limit ? detail?.time_limit + " ms" : "-"}
          </p>
          <p className="text-xs font-medium text-black">
            <span className="text-grayDark">Memory limit: </span>:{" "}
            {detail?.memory_limit ? formatBytes(detail?.memory_limit) : "-"}
          </p>{" "}
        </div>
        {tab === 1 ? (
          <ProblemsTab detail={detail} />
        ) : tab === 2 ? (
          <ProblemsSubmit detail={detail} />
        ) : null}
      </CardRounded16>

      {/* <CouldNotSolve
        info={{
          title: "Couldn't solve the problem?",
          sub_title: `If you failed to solve this clue in 1st attempt, you will be
          provided with a video tutorial to solve this.,`,
          link_title: "I couldn't solve it",
          desc: `Note: You will be given 2 penalty examples for failing to solve this example. 
          In addition, you will be provided with an additional video tutorial on how to solve this problem.`,
        }}
      /> */}
    </>
  );
};

export default ProblemSolve;
