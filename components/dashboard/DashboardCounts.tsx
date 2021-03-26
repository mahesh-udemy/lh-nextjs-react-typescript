import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getData } from "../../lib/api";
import { IDashboardCounts } from "../../lib/models";
import { ServiceOrderType } from "../../lib/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const { data: dashboardCounts } = getData<IDashboardCounts>(
    ServiceOrderType.DashboardCounts
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {dashboardCounts && dashboardCounts.totalOrders}
            Total Orders
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {dashboardCounts && dashboardCounts.openOrders}
            Open Orders
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {dashboardCounts && dashboardCounts.closedOrders}
            Closed orders
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {dashboardCounts && dashboardCounts.totalDelinquent}
            Total Delinquent
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {dashboardCounts && dashboardCounts.daysToComplete}
            Days To Complete
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {dashboardCounts && dashboardCounts.totalCost}
            Total Cost
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
