import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    animation: [],
    comedy: [],
    crime: [],
    documentaries: [],
    drama: [],
    family: [],
    kids: [],
    mystery: [],
    news: [],
    reality: [],
    talk: [],
    topRated: [],
    filteredMovie: [],
    activeSearch: false
};
const serieSlice = createSlice({
  name: 'serie',
  initialState,
  reducers: {
    getAnimationTv (state, action) {
      state.animation = action.payload
    },
    getComedyTv (state, action) {
      state.comedy = action.payload
    }, 
    getCrimeTv (state, action) {
      state.crime = action.payload
    },
    getDocumentariesTv (state, action) {
      state.documentaries = action.payload
    },
    getDramaTv (state, action) {
      state.drama = action.payload
    },  
    getFamilyTv (state, action) {
      state.family = action.payload
    },
    getKidsTv (state, action) {
      state.kids = action.payload
    },
    getMysteryTv (state, action) {
      state.mystery = action.payload
    },
    getNewsTv (state, action) {
      state.news = action.payload
    },
    getRealityTv (state, action) {
      state.reality = action.payload
    },
    getTalkTv (state, action) {
      state.talk = action.payload
    },
    getTopRatedTv (state, action) {
      state.topRated = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
        return state = {
            ...state,
            ...action.payload.serie
        };
    },
  },  
});

export const {getAnimationTv, getComedyTv, getCrimeTv, getDocumentariesTv, getDramaTv, getFamilyTv, getKidsTv, getMysteryTv, getNewsTv,getRealityTv, getTalkTv, getTopRatedTv} = serieSlice.actions;

export default serieSlice.reducer;