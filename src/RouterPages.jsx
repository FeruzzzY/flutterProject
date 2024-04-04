import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ProblemSolve, ProblemSolveList } from "./pages/dashboard/my-courses";
import { PageNFound, PageNFoundDashboard } from "./components";
import { DashboardCourseLayout, DashboardLayout, Layout } from "./layout";
import { Home, Ui } from "./pages/client";
import Dashboard from "./pages/dashboard/Dashboard";
import { Certificates } from "./pages/dashboard/certificates";
import { Payments } from "./pages/dashboard/payments";
import { Settings } from "./pages/dashboard/settings";
import { Help } from "./pages/dashboard/help";
import Login from "./pages/client/auth/Login";
import Notifications from "./pages/dashboard/notifications/Notifications";
import {
  Courses,
  TaskPart,
  TextPart,
  VideoPart,
} from "./pages/dashboard/courses";
import CourPart from "./pages/dashboard/courses/CourParts";

import Comments from "./pages/dashboard/Comments";

import { GetAuthInstance } from "./helpers/httpClient";
import { setGetUser } from "./redux";
import { useDispatch } from "react-redux";

const RouterPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    GetAuthInstance()
      .get(`/api/v1/me`)
      .then((res) => {
        dispatch(setGetUser(res.data));
      });
  };
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/comments" element={<Comments />} />
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="ui" element={<Ui />} />
        </Route>
      </Route>
      <Route path="/dashboard">
        <Route
          element={
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          }
        >
          <Route path="comments" element={<Comments />} />
          <Route index element={<Dashboard />} />

          <Route path="courses">
            <Route index element={<Courses />} />
            <Route
              element={
                <DashboardCourseLayout>
                  <Outlet />
                </DashboardCourseLayout>
              }
            >
              <Route path="video-part/:courses_slug/:courses_id/:c_item_sub_index/:c_child_s_id/">
                <Route index element={<VideoPart />} />
              </Route>
              <Route path="task-part/:courses_slug/:courses_id/:c_item_sub_index/:c_child_s_id/">
                <Route index element={<TaskPart />} />
              </Route>
              <Route path="text-part/:courses_slug/:courses_id/:c_item_sub_index/:c_child_s_id/">
                <Route index element={<TextPart />} />
              </Route>
              {/* <Route path=":slug">
                <Route index element={<CourPart />} />
                <Route path=":inSlug">
                  <Route index element={<InCourt />} />
                </Route>
              </Route> */}
            </Route>
          </Route>

          <Route path="problem-solve">
            <Route index element={<ProblemSolveList />} />
            <Route path=":id">
              <Route index element={<ProblemSolve />} />
            </Route>
          </Route>

          <Route path="certificates">
            <Route index element={<Certificates />} />
          </Route>

          <Route path="payments">
            <Route index element={<Payments />} />
          </Route>

          <Route path="settings">
            <Route index element={<Settings />} />
          </Route>

          <Route path="help">
            <Route index element={<Help />} />
          </Route>

          <Route path="notifications">
            <Route index element={<Notifications />} />
          </Route>

          <Route path="*" element={<PageNFoundDashboard />} />
          {/* <Route path="conversation-type">
              <Route index element={<ConversationType />} />
              <Route path=":id">
                <Route index element={<ApplicationsIndex />} />
                <Route path="new">
                  <Route index element={<ApplicationsNewSingle />} />
                  <Route path=":idd">
                    <Route index element={<ApplicationsNewCall />} />
                  </Route>
                </Route>
                <Route path="search">
                  <Route index element={<ApplicationsSearchSingle />} />
                </Route>
              </Route>
            </Route> */}
        </Route>
      </Route>
      <Route path="*" element={<PageNFound />} />
    </Routes>
  );
};

export default RouterPages;
