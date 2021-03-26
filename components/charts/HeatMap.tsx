import React from "react";
import dynamic from "next/dynamic";
import { IHeatMapSeries } from "../../lib/models";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface IProps {
  series: IHeatMapSeries[];
}

const HeatMap: React.FC<IProps> = ({ series }) => {
  const options = {
    chart: {
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "11px",
        fontWeight: "bold",
        colors: ["#000000"],
      },
    },
    colors: ["#759ca3"],
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      reversed: true,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="heatmap"
      height={series.length * 30}
      width="250px"
    />
  );
};

export default HeatMap;
