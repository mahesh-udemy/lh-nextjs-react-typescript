import { ServiceOrderType } from "../enums";
import { IDashboardCounts } from "../models";
import useRequest from "../useRequest";

const url = `${process.env.HOST}/api/warranty`;

export type Response<T> = {
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

export function getData<T>(type: ServiceOrderType): Response<T> {
  let url = null;
  switch (type) {
    case ServiceOrderType.HomeModel:
      url = "/getserviceordersbymodel";
      break;
    case ServiceOrderType.Vendor:
      url = "/getserviceordersbyvendor";
      break;
    case ServiceOrderType.DashboardCounts:
      url = "/getdashboardcounts";
      break;
    default:
      break;
  }
  return PostRequest<T>(url!);
}

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
