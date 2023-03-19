/**
 * @file DeleteEmployeeContext.jsx
 * @description This file contains the context for delete employee model.
 */
import React, { createContext } from "react";

const DeleteEmployeeContext = createContext({
  open: false,
  EmployeeId: null,
  opeModel: () => {},
  closeModel: () => {},
});

const DeleteEmployeeProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [EmployeeId, setEmployeeId] = React.useState(null);

  const openModel = (id) => {
    setOpen(true);
    setEmployeeId(id);
  };

  const closeModel = () => {
    setOpen(false);
    setEmployeeId(null);
  };

  return (
    <DeleteEmployeeContext.Provider
      value={{
        open,
        EmployeeId,
        openModel,
        closeModel,
      }}
    >
      {children}
    </DeleteEmployeeContext.Provider>
  );
};

export { DeleteEmployeeContext, DeleteEmployeeProvider };
