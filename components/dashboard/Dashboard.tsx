import Grid from "@material-ui/core/Grid";
import React from "react";
import DashboardCounts from "./DashboardCounts";
import ServiceOrders from "./ServiceOrders";
import { ServiceOrderType } from "../../lib/enums";

const Dashboard = () => {
  return (
    <>
      <Grid item xs={12}>
        <DashboardCounts></DashboardCounts>
      </Grid>
      <Grid item xs={12}>
        other graphs and search here
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          Vendor effeciency
        </Grid>
        <Grid item xs={3}>
          <ServiceOrders type={ServiceOrderType.HomeModel}></ServiceOrders>
        </Grid>
        <Grid item xs={3}>
          <ServiceOrders type={ServiceOrderType.Vendor}></ServiceOrders>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
