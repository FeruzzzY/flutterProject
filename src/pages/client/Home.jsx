import React from "react";
import Faq from "../../components/client/home/Faq";
import Views from "../../components/client/home/Views";
import OurCourses from "../../components/client/home/OurCourses";
import ExpertSection from "../../components/client/home/ExpertSection";
import EducationalProcces from "../../components/client/home/EducationalProcces";
import OurCoursesApply from "../../components/client/home/OurCoursesApply";
import UnlockPotential from "../../components/client/home/UnlockPotential";

const Home = () => {
  return (
    <div>
      <UnlockPotential />
      <EducationalProcces />
      <OurCoursesApply />
      <ExpertSection />
      <OurCourses />
      <Views />
      <Faq />
    </div>
  );
};

export default Home;
