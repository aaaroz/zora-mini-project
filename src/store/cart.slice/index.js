import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalProducts: 0,
};

// configure cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // actions
    addToCart: (state, action) => {
      state.data.push(action.payload);
      state.totalProducts = state.data.length;
    },
    // actions for make empty cart
    deleteCart: (state) => {
      state.data = [];
      state.totalProducts = 0;
    },
  },
});

export const selectCart = (state) => state.cart;

export const { addToCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
