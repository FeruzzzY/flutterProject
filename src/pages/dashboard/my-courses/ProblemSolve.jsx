import React, { useState } from "react";
import { TitleCabinet, Tab } from "../../../components/global";

const ProblemSolve = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (i) => setTab(i);
  const tabList = [
    {
      title: "Problems",
    },
    {
      title: "Submit",
    },
  ];
  return (
    <>
      <div
        className="px-4 py-2 border border-gray inline-flex rounded-[100px]
      text-sm font-semibold text-grayDark mb-3"
      >
        Lesson 01
      </div>
      <TitleCabinet title="Matter for this lesson" />
      <Tab tabList={tabList} handleTab={handleTab} tab={tab} />
    </>
  );
};

export default ProblemSolve;
