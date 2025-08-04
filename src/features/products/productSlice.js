import { createSlice } from "@reduxjs/toolkit";

import products from "../../productsContent";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  selectedCategory: "All",
};

//search products & search Category
const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;

    return matchSearch && matchCategory;
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

    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;

export default productSlice.reducer;
