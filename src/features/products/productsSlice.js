import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: 'Laptop',
      description: 'Powerful laptop with 16GB RAM.',
      price: 1200,
      image: '/assets/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model with amazing camera.',
      price: 800,
      image: '/assets/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling wireless headphones.',
      price: 150,
      image: 'assets/headphones.jpg',
    },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
