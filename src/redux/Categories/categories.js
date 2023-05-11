import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (state.categories.push(action.payload) === 'Under construction') {
        return 'Under construction';
      }
      return state;
    },

  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
