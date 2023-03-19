/**
 * @description This file contains all the functions that are used to communicate with the server.
 * @file ServerConnection.js
 */
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1/employees";

export const getAllEmployees = async () => {
  const response = await axios.get();
  return response.data;
};

export const createEmployee = async (employee) => {
  const response = await axios.post("", employee);
  return response.data;
};

export const updateEmployee = async (id, employee) => {
  const body = {
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    gender: employee.gender,
    status: employee.status,
  };
  const response = await axios.patch(`/${id}`, body);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`/${id}`);
  return response.data;
};
