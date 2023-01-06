import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    animation: [] || null,
    comedy: [] || null,
    crime: [] || null,
    documentaries: [] || null,
    drama: [] || null,
    family: [] || null,
    kids: [] || null,
    mystery: [] || null,
    news: [] || null,
    reality: [] || null,
    talk: [] || null,
    topRated: [] || null,
    filteredSeries: [] || null,
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
    },
    searchSeriesByName (state, action) {
      console.log(action.payload)
      if (action.payload == "") { 
        state.filteredSeries = [] 
        state.activeSearch = false
      } else {
        console.log(state.reality)
        let allSeries = [...state.animation, ...state.comedy, ...state.crime, ...state.documentaries, ...state.drama, ...state.family, ...state.kids, ...state.mystery, ...state.news, ...state.reality, ...state.talk, ...state.topRated]
        console.log(allSeries)
        const uniqueSerie = Array.from(new Set(allSeries.map(serie => serie.id))).map(id => {
          return allSeries.find(serie => serie.id === id)
        })
        console.log(uniqueSerie)
        state.filteredSeries = uniqueSerie.filter(serie => serie.name?.toLowerCase().includes(action.payload.toLowerCase()))
        state.activeSearch = true
      }
    },
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

export const {getAnimationTv, getComedyTv, getCrimeTv, getDocumentariesTv, getDramaTv, getFamilyTv, getKidsTv, getMysteryTv, getNewsTv,getRealityTv, getTalkTv, getTopRatedTv, searchSeriesByName} = serieSlice.actions;

export default serieSlice.reducer;