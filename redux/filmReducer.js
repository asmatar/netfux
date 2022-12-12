import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  netflixOriginals:  null,
  trending: [] || null,
  topRated: [] || null,
  history: [] || null,
  scienceFiction: [] || null,
  action: [] || null,
  documentaries: [] || null,
  animation: [] || null,
  adventure: [] || null,
  romance: [] || null,
  comedy: [] || null,
  horror: [] || null,
  crime: [] || null,
  drama: [] || null,
  fantasy: [] || null,
  family: [] || null,
  filteredMovie: [] || null,
  activeSearch: false
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
    searchByName (state, action) {
      if (action.payload == "") { 
        state.filteredMovie = [] 
        state.activeSearch = false
      } else {
        let allFilms = [...state.action, ...state.adventure, ...state.animation, ...state.crime, ...state.comedy, ...state.documentaries, ...state.drama, ...state.family, ...state.fantasy, ...state.history, ...state.horror, ...state.netflixOriginals, ...state.romance, ...state.scienceFiction, ...state.topRated, ...state.trending]
        const uniqueFilm = Array.from(new Set(allFilms.map(film => film.id))).map(id => {
          return allFilms.find(film => film.id === id)
        })
        state.filteredMovie = uniqueFilm.filter(film => film.title?.toLowerCase().includes(action.payload.toLowerCase())) 
        state.activeSearch = true
      }
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

export const {getActionFilm,searchByName,  getAdventureFilm, getAnimationFilm, getCrimeFilm, getComedyFilm, getDocumentariesFilm, getDramaFilm, getFamilyFilm, getFantasyFilm,getHistoryFilm, getHorrorFilm, getNetflixOriginalsFilm, getRomanceFilm, getScienceFictionFilm, getTopRatedFilm, getTrendingFilm} = filmsSlice.actions;

export default filmsSlice.reducer;
