import { createSlice } from '@reduxjs/toolkit';

const loadCartState = () => {
  try {
    const storedState = localStorage.getItem('cartState');
    return storedState ? JSON.parse(storedState) : { items: [], discount: 0, taxRate: 10 };
  } catch (error) {
    console.error('Failed to load cart state:', error);
    return { items: [], discount: 0, taxRate: 10 };
  }
};

const saveCartState = (state) => {
  try {
    localStorage.setItem('cartState', JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save cart state:', error);
  }
};

const initialState = loadCartState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartState(state);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartState(state);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      saveCartState(state);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCartState(state);
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
      saveCartState(state);
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, applyDiscount } = cartSlice.actions;

export default cartSlice.reducer;
