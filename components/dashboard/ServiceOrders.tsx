import React from "react";
import { ServiceOrderType } from "../../lib/enums";
import { getData } from "../../lib/api";
import DemoHeatmap from "../charts/HeatMap";
import {
  IHeatMapSeries,
  IServiceOrdersByModel,
  IServiceOrdersByVendor,
} from "../../lib/models";
import styled from "styled-components";

const ContentDiv = styled.div`
  max-height: 400px;
  overflow-y: auto;
  font-size: 12px;
  color: rgb(102, 102, 102);
`;

const ServiceOrders: React.FC<{ type: ServiceOrderType }> = ({ type }) => {
  const { data: serviceOrders } =
    type === ServiceOrderType.HomeModel
      ? getData<IServiceOrdersByModel[]>(type)
      : getData<IServiceOrdersByVendor[]>(type);
  const series: IHeatMapSeries[] = [];
  serviceOrders?.forEach(
    (serviceOrder: IServiceOrdersByModel | IServiceOrdersByVendor) => {
      let s;
      if (type === ServiceOrderType.HomeModel) {
        s = serviceOrder as IServiceOrdersByModel;
        series.push({
          name: s.model,
          data: [s.serviceOrder],
        });
      } else {
        s = serviceOrder as IServiceOrdersByVendor;
        series.push({
          name: s.vendorName,
          data: [s.serviceOrder],
        });
      }
    }
  );

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
