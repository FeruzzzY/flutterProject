import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { ProblemSolve } from "./pages/dashboard/my-courses";
import { PageNFound } from "./components";
import { DashboardLayout, Layout } from "./layout";
import { Home, Ui } from "./pages/client";
import Dashboard from "./pages/dashboard/Dashboard";
import { Certificates } from "./pages/dashboard/certificates";
import { Payments } from "./pages/dashboard/payments";
import { Settings } from "./pages/dashboard/settings";
import { Help } from "./pages/dashboard/help";

const RouterPages = () => {
  return (
    <Routes>
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
          <Route index element={<Dashboard />} />
          <Route path="problem-solve" element={<ProblemSolve />} />

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
