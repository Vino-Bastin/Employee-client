/**
 * @file Table.config.js
 * @description This file contains the configuration for the table.
 */

const tableColumConfig = [
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
    flex: 0.5,
    editable: true,
    type: "boolean",
    sortable: false,
    filterable: false,
  },
];

export default tableColumConfig;
