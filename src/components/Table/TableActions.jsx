import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

// import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteEmployeeContext } from "../../context/DeleteEmployeeContext";

const TableActions = ({ id, params }) => {
  const { openModel } = React.useContext(DeleteEmployeeContext);

  return (
    <Box display="flex" justifyContent="space-evenly">
      {/* <IconButton
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
      </IconButton> */}
      <IconButton
        onClick={() => {
          openModel(id);
        }}
      >
        <Tooltip title="Delete">
          <DeleteIcon />
        </Tooltip>
      </IconButton>
    </Box>
  );
};

export default TableActions;
