import { IDashboardCounts, IServiceOrdersByModel } from "../models";
import useRequest from "../useRequest";

const url = `${process.env.HOST}/api/warranty`;

type Response<T> = {
  data: T | null;
  error: string;
};

function PostRequest<T>(endpoint: string): Response<T> {
  const { data, error } = useRequest<T>({
    url: `${url}${endpoint}`,
    method: "post",
    data: {},
  });
  return {
    data: data != undefined ? data : null,
    error: error != undefined ? error.message : "",
  };
}

export const getDashboardCounts = () =>
  PostRequest<IDashboardCounts>("/getdashboardcounts");

export const getServiceOrders = (): Response<IServiceOrdersByModel> =>
  PostRequest<IServiceOrdersByModel>("/getserviceordersbymodel");

/*
const GETSERVICEORDERSBYMODEL_URL = `${url}/getserviceordersbymodel`;
const GETSERVICEORDERSBYVENDOR_URL = `${url}/getserviceordersbyvendor`;
const GETVENDOREFFICIENCY_URL = `${url}/getvendorefficiency`;
const GETWARRANTYCOST_URL = `${url}/getWarrantyCost`;
const GETSERVICEORDERSBYLISTTYPE_URL = `${url}/GetServiceOrdersByListType`;
const warranty = {
  GETDASHBOARDCOUNTS_URL,
  GETSERVICEORDERSBYMODEL_URL,
  GETSERVICEORDERSBYVENDOR_URL,
  GETVENDOREFFICIENCY_URL,
  GETWARRANTYCOST_URL,
  GETSERVICEORDERSBYLISTTYPE_URL,
};*/
