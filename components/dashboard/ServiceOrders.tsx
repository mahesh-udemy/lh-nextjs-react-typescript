import React from "react";
import { ServiceOrderType } from "../../lib/enums";
import { getServiceOrders } from "../../lib/api";
import DemoHeatmap from "../charts/HeatMap";
import { IHeatMapSeries } from "../../lib/models";
import styled from "styled-components";

const ContentDiv = styled.div`
  max-height: 400px;
  overflow-y: auto;
  font-size: 12px;
  color: rgb(102, 102, 102);
`;

const ServiceOrders: React.FC<{ type: ServiceOrderType }> = ({ type }) => {
  const { data: serviceOrders } = getServiceOrders();
  const series: IHeatMapSeries[] = [];
  serviceOrders?.forEach((serviceOrder) => {
    series.push({
      name: serviceOrder.model,
      data: [serviceOrder.serviceOrder],
    });
  });
  return (
    <div>
      <div>
        {type === ServiceOrderType.HomeModel
          ? "Service orders by home model"
          : "Service orders by vendor"}
      </div>
      <ContentDiv>
        {series && series.length > 0 && (
          <DemoHeatmap series={series}></DemoHeatmap>
        )}
      </ContentDiv>
    </div>
  );
};

export default ServiceOrders;
