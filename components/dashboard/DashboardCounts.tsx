import React from "react";
import { getDashboardCounts } from "../../lib/api/warranty";
const DashBoardCounts = () => {
  const { data, error } = getDashboardCounts();
  return <div>{data && data.totalOrders}</div>;
};

export default DashBoardCounts;
