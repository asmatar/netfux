import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  id: null
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen (state, action) {
      state.id = action.payload,
      state.show = true
    },
    modalClose (state) {
      state.show = false
      state.id = null
    }, 
  },
});

export const {modalOpen, modalClose} = modalSlice.actions;

export default modalSlice.reducer;
