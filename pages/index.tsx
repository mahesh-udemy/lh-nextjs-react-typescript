import React from "react";
import DashBoard from "../components/dashboard/Dashboard";
import DefaultLayout from "../layouts/DefaultLayout";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <DashBoard></DashBoard>
    </DefaultLayout>
  );
};

export default IndexPage;
