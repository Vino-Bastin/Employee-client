/*
 * @file: index.jsx
 * @description: It is the main component for the New Employee Modal
 */

import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoadingButton from "@mui/lab/LoadingButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import Toast from "react-hot-toast";

import { Colors } from "../../theme";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import {
  initialValues,
  NewEmployeeFormInput,
  validationSchema,
} from "./NewEmployeeForm.config";
import { EmployeeContext } from "../../context/EmployeeContext";
import { createEmployee } from "../../data/ServerConnection";

//* NewEmployee component
const NewEmployee = ({ isOpen, setOpen }) => {
  //* useMediaQuery hook to change the modal width based on the screen size
  const matches = useMediaQuery("(min-width:600px)");
  const { addEmployee } = useContext(EmployeeContext);
  const [loading, setLoading] = useState(false);

  //* handleSubmit function to handle the form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const response = await createEmployee(values);
      addEmployee(response.data);
      setOpen(false);
    } catch (error) {
      if (error.response && error.response.data) {
        if (error.response.data.isArrayOfErrors) {
          Toast.error(error.response.data.message.join(", "));
        } else {
          Toast.error(error.response.data.message);
        }
      } else {
        Toast.error("Something went wrong");
      }
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        if (loading) return;
        setOpen(false);
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: matches ? "50%" : "100%",
          bgcolor: Colors.blueAccent[100],
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {/* title */}
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
        >
          New Employee
        </Typography>

        {/* form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                gap="20px"
                sx={{
                  my: "20px",
                  "& > div": {
                    gridColumn: matches ? undefined : "span 4",
                  },
                }}
              >
                {/* render input components based on the input type */}
                {NewEmployeeFormInput.map((input) =>
                  input.type === "select" ? (
                    <SelectInput
                      key={input.name}
                      type={input.type}
                      label={input.label}
                      name={input.name}
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                      position={input.position}
                      options={input.options}
                    />
                  ) : (
                    <TextInput
                      key={input.name}
                      type={input.type}
                      label={input.label}
                      name={input.name}
                      values={values}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                      position={input.position}
                    />
                  )
                )}
              </Box>

              {/* buttons */}
              <Box display="flex" justifyContent="end" mt="10px">
                <LoadingButton
                  type="button"
                  color="error"
                  variant="contained"
                  sx={{ mr: "10px" }}
                  onClick={() => setOpen(false)}
                  disabled={loading}
                >
                  Cancel
                </LoadingButton>

                <LoadingButton
                  type="submit"
                  color="success"
                  variant="contained"
                  loading={loading}
                >
                  Create
                </LoadingButton>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default NewEmployee;
