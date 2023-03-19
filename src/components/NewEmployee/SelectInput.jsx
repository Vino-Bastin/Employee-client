/**
 * @file SelectInput.jsx
 * @description It is the select input component for the New Employee Modal
 */

import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const SelectInput = ({
  type,
  label,
  name,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  position,
  options,
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      type={type}
      select
      label={label}
      name={name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      sx={{ gridColumn: position }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectInput;
