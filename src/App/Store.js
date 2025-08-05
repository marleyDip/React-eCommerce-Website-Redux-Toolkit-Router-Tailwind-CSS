import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../features/products/productSlice";
import CartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
