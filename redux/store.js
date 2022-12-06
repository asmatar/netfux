import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './filmReducer';
import modalReducer from './modalReducer';
import {createWrapper} from 'next-redux-wrapper'


const makeStore = () => {
  let store = configureStore({
    reducer: {
      films: filmReducer,
      modal: modalReducer,
    }
  });
  return store;
}

export const wrapper = createWrapper(makeStore)