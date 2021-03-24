export interface IDashboardCounts {
  totalOrders: number;
  openOrders: number;
  closedOrders: number;
  totalDelinquent: number;
  daysToComplete: number;
  totalCost: number;
}

export interface IServiceOrdersByModel {
  model: string;
  serviceOrder: number;
}

export type IHeatMapSeries = {
  name: string;
  data: number[];
};
