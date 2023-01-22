import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  id: null,
  type: null
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalOpen (state, action) {
      state.id = action.payload.id
      state.show = true,
      state.type = action.payload.type
    },
    modalClose (state) {
      state.show = false
      state.id = null
      state.type = null
    }, 
  },
});

export const {modalOpen, modalClose} = modalSlice.actions;

export default modalSlice.reducer;
