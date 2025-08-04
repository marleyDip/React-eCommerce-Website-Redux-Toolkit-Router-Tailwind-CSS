import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
