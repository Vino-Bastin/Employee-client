/**
 * @file EmployeeContext.jsx
 * @description This file contains the context for employee.
 */
import React, { createContext, useState } from "react";

const EmployeeContext = createContext({
  employees: [],
  addEmployee: () => {},
  addEmployees: () => {},
  deleteEmployee: () => {},
  updateEmployee: () => {},
});

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [employee, ...prevEmployees]);
  };

  const addEmployees = (employees) => {
    setEmployees(employees);
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee._id !== id)
    );
  };

  const updateEmployee = (id, employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) => (employee.id === id ? employee : emp))
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        addEmployees,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
