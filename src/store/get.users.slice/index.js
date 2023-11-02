import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIUser } from "../../apis/APIUser";

// create an async thunk for fetch user data
export const fetchGetUsers = createAsyncThunk(
  "fetch/getUsers",
  APIUser.getUsers
);

// initial state
const initialState = {
  message: "",
  status: "idle",
  data: null,
};

// create user slice
const getUsersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("fetch/getUsers/pending", (state) => {
      state.status = "loading";
      state.message = "";
    });

    builder.addCase("fetch/getUsers/fulfilled", (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    });

    builder.addCase("fetch/getUsers/rejected", (state, { error }) => {
      state.status = "failed";
      state.message = error.stack;
    });
  },
});

export const selectUsers = (state) => state.users;

export default getUsersSlice.reducer;
