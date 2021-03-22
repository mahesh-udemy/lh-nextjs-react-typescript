import React from "react";
import DashBoardCounts from "../components/dashboard/DashboardCounts";
import DefaultLayout from "../layouts/DefaultLayout";

const IndexPage = () => {
  return (
    <DefaultLayout>
      
      <DashBoardCounts></DashBoardCounts>
    </DefaultLayout>
  );
};

export default IndexPage;
