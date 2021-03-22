import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { getDashboardCounts } from "../../lib/api/warranty";

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
  const result = getDashboardCounts();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {result.dashBoardCounts && result.dashBoardCounts.totalOrders}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {result.dashBoardCounts && result.dashBoardCounts.openOrders}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {result.dashBoardCounts && result.dashBoardCounts.closedOrders}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {result.dashBoardCounts && result.dashBoardCounts.totalDelinquent}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {result.dashBoardCounts && result.dashBoardCounts.daysToComplete}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            {result.dashBoardCounts && result.dashBoardCounts.totalCost}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
