import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const changeQuantityItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (changeQuantityItem) {
        changeQuantityItem.quantity += amount;
      }

      if (changeQuantityItem.quantity < 1) {
        state.items = state.items.filter((item) => item !== changeQuantityItem);
      }
    },
  },
});

export const { addCartItem, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubTotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

const cartSelector = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubTotal,
  (cart, subTotal) => (subTotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotalPrice = createSelector(
  selectSubTotal,
  selectDeliveryPrice,
  (subTotal, deliveryPrice) => subTotal + deliveryPrice
);
