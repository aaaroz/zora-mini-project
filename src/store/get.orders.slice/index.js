import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIOrder } from "../../apis/APIOrder";

// create async thunk for get all orders
export const fetchGetOrders = createAsyncThunk(
  "fetch/getOrders",
  APIOrder.getOrders
);

// initial state for orders
const initialState = {
  message: "",
  status: "idle",
  data: null,
  shouldFetchLatestData: false,
};

// configure slice
const getOrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    toggleFetchLatestData: (state) => {
      state.shouldFetchLatestData = !state.shouldFetchLatestData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("fetch/getOrders/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });
    builder.addCase("fetch/getOrders/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });
    builder.addCase("fetch/getOrders/rejected", (state, { error }) => {
      state.status = "failed";
      state.data = error.stack;
    });
  },
});

export const selectOrders = (state) => state.orders;
export const { toggleFetchLatestData } = getOrdersSlice.actions;

export default getOrdersSlice.reducer;
