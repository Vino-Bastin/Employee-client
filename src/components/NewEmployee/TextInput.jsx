/**
 * @file TextInput.jsx
 * @description It is the text input component for the New Employee Modal
 */
import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({
  type,
  label,
  name,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  position,
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      type={type}
      label={label}
      name={name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      sx={{ gridColumn: position }}
    />
  );
};

export default TextInput;
