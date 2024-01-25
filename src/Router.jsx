import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ProblemSolve } from "./pages/dashboard/my-courses";
import { PageNFound } from "./components";
import { DashboardLayout, Layout } from "./layout";
import { Home, Ui } from "./pages/client";

const Router = () => {
  return (
    <BrowserRouter>
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
            <Route path="problem-solve" element={<ProblemSolve />} />

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
    </BrowserRouter>
  );
};

export default Router;
