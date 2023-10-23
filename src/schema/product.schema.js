import * as yup from "yup";

export const ProductSchema = yup.object().shape({
  title: yup
    .string("product name should be a string!")
    .required("product name is required!")
    .min(8, "Product Name must exceed 8 characters"),

  category: yup
    .string("product category should be a string!")
    .oneOf(["Hoodie", "T-Shirt", "Bottoms", "Jacket", "Accessories"])
    .required("product category is required!"),

  image: yup.mixed().test("please select a file", (value) => {
    return value && value.length;
  }),

  price: yup
    .number("product price should be a number!")
    .required("product price is required!")
    .min(1, "Product Price is not Valid!"),

  amount: yup
    .number("product amount should be a number!")
    .required("product amount is required!")
    .min(1, "Product amount is not Valid!"),

  description: yup
    .string("product description should be a string!")
    .required("product description is required!"),
});
