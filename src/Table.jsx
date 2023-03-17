import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import MOCK_DATA from "./data/MOCK_DATA.js";

const Table = () => {
  const [data, setData] = useState(MOCK_DATA);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "userName", headerName: "User Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        return (
          <button
            onClick={() => {
              setData(data.filter((item) => item.id !== params.row.id));
            }}
          >
            Delete
          </button>
        );
      },
    },
  ];

  return (
    <Box height="90vh" width="80%">
      <DataGrid
        rows={data}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
      />
    </Box>
  );
};

export default Table;
