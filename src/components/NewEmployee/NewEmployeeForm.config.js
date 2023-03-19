/**
 * @file NewEmployeeForm.config.js
 * @description New Employee Form Config File
 */

import * as Yup from "yup";

//* Form Initial Values
export const initialValues = {
  userName: "",
  email: "",
  gender: "",
  phone: "",
  status: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// * Form Validation Schema
export const validationSchema = Yup.object({
  userName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  gender: Yup.string().required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  status: Yup.string().required("Required"),
});

// * Form Input Fields
export const NewEmployeeFormInput = [
  {
    name: "userName",
    label: "User Name",
    type: "text",
    placeholder: "Enter User Name",
    position: "span 2",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "Enter Email",
    position: "span 2",
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: [
      {
        value: "Male",
        label: "Male",
      },
      {
        value: "Female",
        label: "Female",
      },
    ],
    placeholder: "Please select a gender",
    position: "span 2",
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "Enter Phone",
    position: "span 2",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      {
        value: true,
        label: "Active",
      },
      {
        value: false,
        label: "Inactive",
      },
    ],
    placeholder: "Please select a status",
    position: "span 2",
  },
];
