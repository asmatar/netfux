import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  netflixOriginals: [],
  trending: [],
  topRated: [],
  history: [],
  scienceFiction: [],
  action: [],
  documentaries: [],
  animation: [],
  adventure: [],
  romance: [],
  comedy: [],
  horror: [],
  crime: [],
  drama: [],
  fantasy: [],
  family: [],
};
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    getActionFilm (state, action) {
      state.action = action.payload
    },
    getAdventureFilm (state, action) {
      state.adventure = action.payload
    }, 
    getAnimationFilm (state, action) {
      state.animation = action.payload
    },
    getCrimeFilm (state, action) {
      state.crime = action.payload
    },
    getComedyFilm (state, action) {
      state.comedy = action.payload
    },  
    getDocumentariesFilm (state, action) {
      state.documentaries = action.payload
    },
    getDramaFilm (state, action) {
      state.drama = action.payload
    },
    getFamilyFilm (state, action) {
      state.family = action.payload
    },
    getFantasyFilm (state, action) {
      state.fantasy = action.payload
    },
    getHistoryFilm (state, action) {
      state.history = action.payload
    },
    getHorrorFilm (state, action) {
      state.horror = action.payload
    },
    getNetflixOriginalsFilm (state, action) {
      state.netflixOriginals = action.payload
    },
    getRomanceFilm (state, action) {
      state.romance = action.payload
    },
    getScienceFictionFilm (state, action) {
      state.scienceFiction = action.payload
    },
    getTopRatedFilm (state, action) {
      state.topRated = action.payload
    },
    getTrendingFilm (state, action) {
      state.trending = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
        return state = {
            ...state,
            ...action.payload.films
        };
    },
  },  
});

export const {getActionFilm, getAdventureFilm, getAnimationFilm, getCrimeFilm, getComedyFilm, getDocumentariesFilm, getDramaFilm, getFamilyFilm, getFantasyFilm,getHistoryFilm, getHorrorFilm, getNetflixOriginalsFilm, getRomanceFilm, getScienceFictionFilm, getTopRatedFilm, getTrendingFilm} = filmsSlice.actions;

export default filmsSlice.reducer;
