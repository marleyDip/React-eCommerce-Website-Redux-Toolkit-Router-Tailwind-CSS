import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      //(item) => item.id === action.payload.id

      if (existingItem) {
        // If already in cart, increase quantity
        existingItem.quantity += 1;
      } else {
        //If not in cart, add with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // Action => 1st add
    // Result in Redux State => { id: 5, title: 'Mouse', quantity: 1 }

    //remove cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // with action.payload.id => Object Form
    // dispatch(removeFromCart({ id }));

    // without action.payload.id => Primitive ID
    //removeFromCart: (state, action) => {
    //state.items = state.items.filter((item) => item.id !== action.payload);
    //}

    //dispatch(removeFromCart(id));

    // update
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && action.payload.quantity >= 1) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCard, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
