import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProducts: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(
        (product) => product.id === productId
      );
    },
  },
});

export const { setSelectedProducts } = productsSlice.actions;

export default productsSlice.reducer;
