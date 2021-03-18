import { IDashboardCounts } from "../models/dashboardcounts";
import useRequest from "../useRequest";

const url = `${process.env.HOST}/api/warranty`;

export const getDashboardCounts = (): {
  data: IDashboardCounts | null;
  error: string;
} => {
  const { data, error } = useRequest<IDashboardCounts>({
    url: `${url}/getdashboardcounts`,
    method: "post",
    data: {},
  });
  const msg = error != undefined ? error.message : "";
  const content = data != undefined ? data : null;
  return { data: content, error: msg };
};

/*const GETDASHBOARDCOUNTS_URL = `${url}/getdashboardcounts`;
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
