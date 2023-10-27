import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalProducts: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
      state.totalProducts = state.data.length;
    },
    deleteCart: (state) => {
      state.data = [];
      state.totalProducts = 0;
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
