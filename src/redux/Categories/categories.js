import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      if (state.categories.push(action.payload) === 'Under construction') {
        return 'Under construction';
      }
      return state;
    },

  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
