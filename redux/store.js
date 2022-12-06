import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './filmReducer';
import favoriteReducer from './favoriteReducer';
import modalReducer from './modalReducer';
import {createWrapper} from 'next-redux-wrapper'


const makeStore = () => {
  let store = configureStore({
    reducer: {
      films: filmReducer,
      favorite: favoriteReducer,
      modal: modalReducer,
    }
  });
  return store;
}

export const wrapper = createWrapper(makeStore)