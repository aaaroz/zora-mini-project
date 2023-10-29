import * as yup from "yup";

export const OrderSchema = yup.object().shape({
  name: yup.string("name should be a string!").required("Name is required!"),

  email: yup
    .string("email should be a string")
    .email("please provide a valid email address")
    .required("email is required"),

  phone: yup
    .number("Phone Number should be a number!")
    .required("Phone Number is required!"),

  address: yup
    .string(" Address should be a string!")
    .required(" Address is required!"),
});
