import * as yup from "yup";

export const UserSchema = yup.object().shape({
  name: yup.string("name should be a string"),
});
