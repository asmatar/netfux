import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './filmReducer';
import {createWrapper} from 'next-redux-wrapper'


const makeStore = () => {
  let store = configureStore({
    reducer: {
      films: filmReducer,
    }
  });
  return store;
}

export const wrapper = createWrapper(makeStore)