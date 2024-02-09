import React, { useEffect, useState } from "react";
import { Tab } from "../../../components/global";
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
import StatusSolution from "../../../components/dashboard-layout/my-courses/StatusSolution";
import MyStatusSolution from "../../../components/dashboard-layout/my-courses/MyStatusSolution";
import { NavigationDashboard } from "../../../components/dashboard-layout";

const ProblemSolve = () => {
  const { t, i18n } = useTranslation();
  const optionsShowPageSize = [
    { value: "20", text: `${t("pagination.show")} 20` },
    { value: "50", text: `${t("pagination.show")} 50` },
    { value: "100", text: `${t("pagination.show")} 100` },
    { value: "200", text: `${t("pagination.show")} 200` },
  ];
  const [obj, setObj] = useState({
    p_size: optionsShowPageSize[0].value,
    page: 1,
  });
  const [tab, setTab] = useState(1);
  const [detail, setDetail] = useState({});
  const [statusMy, setStatusMy] = useState([]);
  const [statusMyPagination, setStatusMyPagination] = useState([]);
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const handleTab = (i) => setTab(i);
  const tabList = [
    {
      title: t("tab_courses.problems"),
    },
    {
      title: t("tab_courses.submit"),
    },
    {
      title: t("tab_courses.status"),
    },
    {
      title: t("tab_courses.my_status"),
    },
    {
      title: t("tab_courses.comments"),
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

  const getResultStatusMyPagination = (showPageSize, page) => {
    dispatch(setLoading(true));
    GetAuthInstance()
      .get(
        `api/v1/results?problem_id=${id}&my=1&per_page=${showPageSize}&page=${page}`
      )
      .then((res) => {
        let data = res?.data?.data?.data;
        let total = res?.data?.data?.total;
        setStatusMyPagination(data);
        setCount(total);
      })
      .catch((error) => {
        setStatusMyPagination([]);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    getProblems();
    getResultStatusMy();
    getResultStatusMyPagination(obj?.p_size, obj?.page);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [i18n.language]);

  return (
    <div className="">
      <NavigationDashboard title={t("sidebar_links.my_courses")} />
      <div className="lg:mt-[70px] mt-[60px] p-6">
        <Back link="/dashboard/problem-solve" />
        <div className="px-4 py-2 border border-gray inline-flex rounded-[100px] text-sm font-semibold text-grayDark mb-3">
          Lesson 01
        </div>
        <p className={`font-bold md:text-2xl text-lg mb-4`}>
          Matter for this lesson
        </p>
        <Tab tabList={tabList} handleTab={handleTab} tab={tab} />

        <CardRounded16>
          {tab === 1 ? (
            <ProblemsTab detail={detail} />
          ) : tab === 2 ? (
            <ProblemsSubmit
              detail={detail}
              statusMy={statusMy}
              setTab={setTab}
              getResultStatusMyPagination={() =>
                getResultStatusMyPagination(obj?.p_size, obj?.page)
              }
              getProblems={() => getProblems()}
            />
          ) : tab === 3 ? (
            <StatusSolution id={id} />
          ) : tab === 4 ? (
            <MyStatusSolution
              setObj={setObj}
              obj={obj}
              getResultStatusMyPagination={getResultStatusMyPagination}
              statusMyPagination={statusMyPagination}
              count={count}
              optionsShowPageSize={optionsShowPageSize}
            />
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
    </div>
  );
};

export default ProblemSolve;
