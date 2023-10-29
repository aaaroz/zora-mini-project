import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  firstName: yup
    .string("firstname should be a string")
    .required("firstname is required")
    .min(3, "firstname must exceed 3 characters"),
  lastName: yup
    .string("lastname should be a string")
    .required("lastname is required")
    .min(3, "lastname must exceed 3 characters"),
  username: yup
    .string("username should be a string")
    .required("username is required"),
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email is required"),
  password: yup
    .string("password should be a string")
    .min(8, "password must exceed 8 characters")
    .required("password is required"),
  confirmPassword: yup
    .string("password should be a string")
    .oneOf([yup.ref("password")], "password is not valid")
    .required("password is required"),
});
