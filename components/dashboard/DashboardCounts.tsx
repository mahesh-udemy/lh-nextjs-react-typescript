import React, { useEffect } from "react";
//import useSWR from "swr";
import { getDashboardCounts } from "../../lib/api/warranty";

const DashBoardCounts = () => {
  /*const { GETDASHBOARDCOUNTS_URL } = warranty;
  const fetcher = (url: string) =>
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => res.json());

  const { data, error } = useSWR(
    `${process.env.HOST}/${GETDASHBOARDCOUNTS_URL}`,
    fetcher
  );*/

  useEffect(async () => {
    const counts = await getDashboardCounts();
  }, [])

  
  return <div>{counts.totalOrders}</div>;
};

export default DashBoardCounts;
