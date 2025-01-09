import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      

      if (product) {
        const existingProduct = state.products.find((p) => p.key === action.payload.key);
        
        if (existingProduct) {
          existingProduct.quantity += action.payload.quantity;
        } else {
          
          state.products.push(action.payload);
       
        }
        
        state.quantity += action.payload.quantity;
      
        state.total += action.payload.first_publish_year * action.payload.quantity;
        
        
      }
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex((p) => p.key === productId);
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.products.splice(productIndex, 1);
        state.quantity -= product.quantity;
        state.total -= product.first_publish_year * product.quantity;
      }
    },
    updateCart: (state, action) => {
      const { productId, quantity } = action.payload;
      
      const product = state.products.find((p) => p.key === productId);
      if (product) {
        state.quantity += quantity - product.quantity;
        state.total += product.first_publish_year * (quantity - product.quantity);
        product.quantity = quantity;
      }
    },
  },
});

export const { addProduct, reset, removeProduct, updateCart } = cartSlice.actions;
export default cartSlice.reducer;










