import axios, { AxiosResponse } from "axios";
import { IDashboardCounts } from "../models/dashboardcounts";

axios.defaults.baseURL = process.env.HOST;
const url = "api/warranty";
const responseBody = (response: AxiosResponse) => response.data;
const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

export const getDashboardCounts = async (): Promise<IDashboardCounts> => {
  return requests.post(`${url}/getdashboardcounts`, {});
};

/*const Warranty = {
  dashboardcounts = async (): Promise<IDashboardCounts> =>
    requests.post(`${url}/getdashboardcounts`, {}),
  details: (id: string) => requests.get(`/activities/${id}`),
  create: (activity: IActivity) => requests.post("/activities", activity),
  update: (id: string, activity: IActivity) =>
    requests.put(`/activities/${id}`, activity),
  delete: (id: string) => requests.del(`/activities/${id}`),
  attend: (id: string) => requests.post(`/activities/${id}/attend`, {}),
  unattend: (id: string) => requests.del(`/activities/${id}/attend`),
};*/

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
//export default Warranty;
