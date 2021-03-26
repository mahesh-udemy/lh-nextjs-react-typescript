export interface IDashboardCounts {
  totalOrders: number;
  openOrders: number;
  closedOrders: number;
  totalDelinquent: number;
  daysToComplete: number;
  totalCost: number;
}

export interface IServiceOrders {
  serviceOrder: number;
}

export interface IServiceOrdersByModel extends IServiceOrders {
  model: string;
}

export interface IServiceOrdersByVendor extends IServiceOrders {
  vendorName: string;
}

export type IHeatMapSeries = {
  name: string;
  data: number[];
};
