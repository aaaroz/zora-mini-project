import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIUser } from "../../apis/APIUser";

export const fetchGetUserById = createAsyncThunk(
  "fetch/getUser",
  APIUser.getUser
);

const initialState = {
  message: "",
  status: "idle",
  data: null,
};

const getUserSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getUser/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase("fetch/getUser/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });

    builder.addCase("fetch/getUser/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectUser = (state) => state.user;

export default getUserSlice.reducer;
