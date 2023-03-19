/**
 * @file Table.jsx
 * @description This file contains the table component.
 */
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";

import { EmployeeContext } from "../../context/EmployeeContext";
import { getAllEmployees, updateEmployee } from "../../data/ServerConnection";
import TableActions from "./TableActions";
import DeleteEmployeeModel from "./DeleteEmployeeModel";
import { DeleteEmployeeProvider } from "../../context/DeleteEmployeeContext";
import { Colors } from "../../theme/index.js";
import tableColumConfig from "./Table.config";

const Table = () => {
  const [loading, setLoading] = useState(false);
  const { employees, addEmployees } = useContext(EmployeeContext);
  const matches = useMediaQuery("(max-width:600px)");

  const columns = [
    ...tableColumConfig,
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => <TableActions id={params.id} params={params} />,
    },
  ];

  useEffect(() => {
    const getEmployees = async () => {
      setLoading(true);
      try {
        const response = await getAllEmployees();
        addEmployees(response.data);
        Toast.success(
          "Gender and Status are the editable fields in the table and double click on the cell to edit"
        );
      } catch (error) {
        console.log(error);
        Toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditCellChange = async (newRow, oldRow) => {
    try {
      setLoading(true);
      await updateEmployee(newRow._id, newRow);
      Toast.success("Employee updated successfully");
      return newRow;
    } catch (error) {
      console.log(error);
      Toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
    return oldRow;
  };

  return (
    <DeleteEmployeeProvider>
      <Box display="flex" flex="1" justifyContent="center" p={1} height="90vh">
        <DeleteEmployeeModel />

        <Box
          display="flex"
          width={matches ? "100%" : "80%"}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: Colors.blueAccent[300],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              border: "none",
              backgroundColor: Colors.blueAccent[100],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: Colors.blueAccent[300],
            },
          }}
        >
          <DataGrid
            rows={employees}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            loading={loading}
            getRowId={(row) => row._id}
            pageSizeOptions={[10, 20, 50]}
            processRowUpdate={handleEditCellChange}
          />
        </Box>
      </Box>
    </DeleteEmployeeProvider>
  );
};

export default Table;
