import { IDashboardCounts } from "../models/dashboardcounts";
import useRequest from "../useRequest";

const url = `${process.env.HOST}/api/warranty`;

type ReturnDashboardCounts = {
  dashBoardCounts: IDashboardCounts | null;
  error: string;
};

export const getDashboardCounts = (): ReturnDashboardCounts => {
  const { data, error } = useRequest<IDashboardCounts>({
    url: `${url}/getdashboardcounts`,
    method: "post",
    data: {},
  });
  const msg = error != undefined ? error.message : "";
  const content = data != undefined ? data : null;
  return { dashBoardCounts: content, error: msg };
};

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
