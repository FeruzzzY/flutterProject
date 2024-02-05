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
import StatusSolution from "../../../components/dashboard-layout/my-courses/StatusSolution";
import MyStatusSolution from "../../../components/dashboard-layout/my-courses/MyStatusSolution";

const ProblemSolve = () => {
  const [tab, setTab] = useState(1);
  const [detail, setDetail] = useState({});
  const [statusMy, setStatusMy] = useState([]);

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

  const getResultStatusMy = () => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(`api/v1/results?problem_id=${id}&my=1&per_page=${100}&page=${1}`)
      .then((res) => {
        let data = res?.data?.data?.data;

        // Agar arrayda misol uchun 5ta object nomi
        // 1xil bolganda va 2-3 ta boshqa nomdagi objectlar
        // bolganda. Va shu holatda 1xil nomdagi objectlardan oxirgisini
        // qolgan nomdagi objectlar bilan birga arrayda qoldirish kerak bolib
        // qolgan 1xil nomdagi objectlarni o"chirish kerak bo"lganda ishlatilindi

        const groupedByName = data?.reduce((acc, current) => {
          acc[current.compiler.display_name] =
            acc[current.compiler.display_name] || [];
          acc[current.compiler.display_name].push(current);
          return acc;
        }, {});

        const resultArray = [];

        Object.values(groupedByName).forEach((group) => {
          const highestIdObject = group.reduce((acc, current) =>
            current.id > acc.id ? current : acc
          );
          resultArray.push({
            id: highestIdObject?.id,
            compiler_id: highestIdObject?.compiler?.id,
            display_name: highestIdObject?.compiler?.display_name,
            source: highestIdObject?.source,
          });
        });

        setStatusMy(resultArray || []);
      })
      .catch((error) => {
        setStatusMy([]);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getProblems();
    getResultStatusMy();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [i18n.language]);

  return (
    <div className="">
      <Back link="/dashboard/problem-solve" />
      <div className="px-4 py-2 border border-gray inline-flex rounded-[100px] text-sm font-semibold text-grayDark mb-3">
        Lesson 01
      </div>
      <TitleCabinet title="Matter for this lesson" />
      <Tab tabList={tabList} handleTab={handleTab} tab={tab} />

      <CardRounded16>
        {tab === 1 ? (
          <ProblemsTab detail={detail} />
        ) : tab === 2 ? (
          <ProblemsSubmit detail={detail} statusMy={statusMy} />
        ) : tab === 3 ? (
          <StatusSolution id={id} />
        ) : tab === 4 ? (
          <MyStatusSolution id={id} />
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
    </div>
  );
};

export default ProblemSolve;
