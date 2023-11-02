import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../apis/APIProduct";

// create async thunk for get all products by category
export const fetchGetProductCategory = createAsyncThunk(
  "fetch/getProductsByCategory",
  APIProduct.getProductByCategory
);

// initial state for products
const initialState = {
  message: "",
  status: "idle",
  data: null,
  shouldFetchLatestProductsCategory: false,
};

// configure slice
const getProductByCategorySlice = createSlice({
  name: "productsByCategory",
  initialState,
  reducers: {
    toggleFetchLatestProductsCategory: (state) => {
      state.shouldFetchLatestProductsCategory =
        !state.shouldFetchLatestProductsCategory;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("fetch/getProductsByCategory/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase(
      "fetch/getProductsByCategory/fulfilled",
      (state, { payload }) => {
        state.status = "success";
        state.data = payload;
      }
    );
    builder.addCase(
      "fetch/getProductsByCategory/rejected",
      (state, { error }) => {
        state.status = "failed";
        state.data = error.stack;
      }
    );
  },
});

export const selectProductsByCategory = (state) => state.productsByCategory;
export const { toggleFetchLatestProductsCategory } =
  getProductByCategorySlice.actions;

export default getProductByCategorySlice.reducer;
