/**
 * @file DeleteEmployeeModel.jsx
 * @description This file contains the delete employee model.
 */

import React, { useContext, useState } from "react";
import Model from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Toast from "react-hot-toast";
import useMediaQuery from "@mui/material/useMediaQuery";

import { DeleteEmployeeContext } from "../../context/DeleteEmployeeContext";
import { EmployeeContext } from "../../context/EmployeeContext";
import { Colors } from "../../theme";
import { deleteEmployee as DeleteEmployeeRequest } from "../../data/ServerConnection";

const DeleteEmployeeModel = () => {
  const { open, closeModel, EmployeeId } = useContext(DeleteEmployeeContext);
  const { deleteEmployee } = useContext(EmployeeContext);
  const [loading, setLoading] = useState(false);
  const matches = useMediaQuery("(max-width:600px)");

  const CloseModelHandler = () => {
    if (loading) return;
    closeModel();
  };

  const DeleteHandler = async () => {
    try {
      setLoading(true);
      await DeleteEmployeeRequest(EmployeeId);
      deleteEmployee(EmployeeId);
      Toast.success("Employee deleted successfully");
    } catch (error) {
      Toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
      closeModel();
    }
  };

  return (
    <Model open={open} onClose={CloseModelHandler}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: matches ? "100%" : "50%",
          bgcolor: Colors.blueAccent[100],
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
          fontWeight="bold"
        >
          Delete Row
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          id="modal-modal-description"
          sx={{
            marginTop: 1,
            marginBottom: 2,
          }}
        >
          Are you sure you want to delete this row?
        </Typography>
        <Box display="flex" justifyContent="space-evenly">
          <LoadingButton
            variant="contained"
            color="error"
            onClick={CloseModelHandler}
          >
            Cancel
          </LoadingButton>
          <LoadingButton
            variant="contained"
            color="success"
            onClick={DeleteHandler}
            loading={loading}
          >
            Delete
          </LoadingButton>
        </Box>
      </Box>
    </Model>
  );
};

export default DeleteEmployeeModel;
