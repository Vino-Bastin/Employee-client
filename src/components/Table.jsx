import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Model from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid";

import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import MOCK_DATA from "../data/MOCK_DATA.js";
import { Colors } from "../theme/index.js";

const Table = () => {
  const [data, setData] = useState(MOCK_DATA);
  const [editedRowIds, setEditedRowIds] = useState([]);
  const [deleteRow, setDeleteRow] = useState(null);
  const [open, setOpen] = useState(false);

  const columns = [
    {
      field: "userName",
      headerName: "User Name",
      flex: 1,
      sortable: true,
      filterable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      sortable: true,
      filterable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Male", "Female"],
      sortable: false,
      filterable: false,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      sortable: false,
      filterable: false,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      editable: true,
      type: "boolean",
      valueOptions: ["active", "inactive"],
      sortable: false,
      filterable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent="space-evenly">
            <IconButton
              disabled={!editedRowIds.includes(params?.id)}
              onClick={() => {
                setEditedRowIds((prevEditedRowIds) => {
                  return prevEditedRowIds.filter((id) => id !== params?.id);
                });
              }}
            >
              <Tooltip title="Save">
                <SaveIcon />
              </Tooltip>
            </IconButton>
            <IconButton
              onClick={() => {
                setDeleteRow(params?.id);
                setOpen(true);
              }}
            >
              <Tooltip title="Delete">
                <DeleteIcon />
              </Tooltip>
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box display="flex" flex="1" justifyContent="center" p={1} height="90vh">
      <Box
        display="flex"
        width="80%"
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
        <Model
          open={open}
          onClose={() => {
            setDeleteRow(null);
            setOpen(false);
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <h2 id="modal-modal-title">Delete Row</h2>
            <p id="modal-modal-description">
              Are you sure you want to delete this row?
            </p>
            <Box display="flex" justifyContent="space-evenly">
              <button
                onClick={() => {
                  setDeleteRow(null);
                  setOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setData((prevData) => {
                    return prevData.filter((item) => item.id !== deleteRow);
                  });
                  setDeleteRow(null);
                  setOpen(false);
                }}
              >
                Delete
              </button>
            </Box>
          </Box>
        </Model>

        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 20, 50]}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          onCellEditStop={(params) => {
            setEditedRowIds((prevEditedRowIds) => [
              ...prevEditedRowIds,
              params.id,
            ]);
          }}
        />
      </Box>
    </Box>
  );
};

export default Table;
