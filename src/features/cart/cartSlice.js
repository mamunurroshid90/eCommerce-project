import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, count } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.count === undefined) existingItem.count = 0;
        console.log(existingItem);
        existingItem.count += count; // Update count if the product already exists in the cart
      } else {
        state.items.push({ ...product, count }); // Add new product with count
        // console.log({ ...product, count });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// selectors

export const selectCartItems = (state) => state.cart.items;

export const selectSubTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.newPrice * item.count,
    0
  );

export const selectTotal = (state) => {
  const subTotal = selectSubTotal(state);
  const tax = subTotal * 0.1; // Example of tax 10%
  const shipping = 10; // Example shipping cost
  return subTotal + tax + shipping;
};

export const selectItemTotal = (state, itemId) => {
  const item = state.cart.items.find((item) => item.id === itemId);
  return item ? item.newPrice * item.count : 0;
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
