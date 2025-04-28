// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    programList: [], // Renamed from items to match your code
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.programList.find((i) => i.title === item.title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.programList.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.programList = state.programList.filter((item) => item.title !== action.payload.title);
    },
    clearCart: (state) => {
      state.programList = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;