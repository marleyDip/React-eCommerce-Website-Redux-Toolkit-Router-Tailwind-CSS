import { createSlice } from "@reduxjs/toolkit";

import products from "../../productsContent";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
};

//search products & search Category
const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
    return matchSearch;
  });
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});

export const { setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
