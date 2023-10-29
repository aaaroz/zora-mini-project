import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email is required"),
  password: yup
    .string("password should be a string")
    .min(8, "password must exceed 8 characters")
    .required("password is required"),
});
