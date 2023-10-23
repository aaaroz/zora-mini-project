import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../apis/APIProduct";

export const fetchGetProductById = createAsyncThunk(
  "fetch/getProduct",
  APIProduct.getProduct
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const getProductSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getProduct/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase("fetch/getProduct/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });

    builder.addCase("fetch/getProduct/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectProduct = (state) => state.product;

export default getProductSlice.reducer;
