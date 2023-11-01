import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIProduct } from "../../apis/APIProduct";

// create async thunk for get all products
export const fetchGetProducts = createAsyncThunk(
  "fetch/getProducts",
  APIProduct.getProducts
);

// initial state for products
const initialState = {
  message: "",
  status: "idle",
  data: null,
  shouldFetchLatestProducts: false,
};

// configure slice
const getProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleFetchLatestProducts: (state) => {
      state.shouldFetchLatestProducts = !state.shouldFetchLatestProducts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("fetch/getProducts/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/getProducts/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase("fetch/getProducts/rejected", (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
    });
  },
});

export const selectProducts = (state) => state.products;
export const { toggleFetchLatestProducts } = getProductsSlice.actions;

export default getProductsSlice.reducer;
