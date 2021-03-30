import axios from "./axiosService";

const getEmployees = () => {
  return axios.get("/empleados");
};

const getEmployee = id => {
  return axios.get(`/empleados/${id}`);
};

const newEmployee = data => {
  return axios.post("/tutorials", data);
};

const updEmployee = (id, data) => {
  return axios.put(`/tutorials/${id}`, data);
};

const delEmployee = id => {
  return axios.delete(`/tutorials/${id}`);
};

const getAreas = () => {
  return axios.get("/empleados");
};

const getArea = id => {
  return axios.get(`/empleados/${id}`);
};

const newArea = data => {
  return axios.post("/tutorials", data);
};

const updArea = (id, data) => {
  return axios.put(`/tutorials/${id}`, data);
};

const delArea = id => {
  return axios.delete(`/tutorials/${id}`);
};



export default {
  getEmployees,
  getEmployee,
  newEmployee,
  updEmployee,
  delEmployee,
  getAreas,
  getArea,
  newArea,
  updArea,
  delArea,
};
