import { createSlice } from '@reduxjs/toolkit';
/* let favMovies;
let favSeries;
const getFromLocalStorage = (key) => {
  if (!key || typeof window === 'undefined') {
      return ""
  }
  return localStorage.getItem(key)
} */
/* if (typeof window !== 'undefined') {
  // Perform localStorage action
   favMovies = getFromLocalStorage() ? JSON.parse(localStorage.getItem('movieList') : [])
   favSeries = JSON.parse(localStorage.getItem('serieList'))
} */
/* const initialState = { 
  favoriteMovies: getFromLocalStorage("movieList") ? JSON.parse(getFromLocalStorage("movieList") || '{}') : [],
  favoriteSeries: getFromLocalStorage("serieList") ? JSON.parse(getFromLocalStorage("serieList") || '{}') : []
}; */
const initialState = {
  favoriteMovies: /* favMovies || */ /* (typeof window !== "undefined" && window.localStorage.getItem('movieList')) ? JSON.parse(window.localStorage.getItem('movieList')) : */ [],
  favoriteSeries: /*f avSeries || */ [],
}; 
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToMyList (state, action) {    
      if (action.payload.type === "movie") {
        state.favoriteSeries = state.favoriteSeries
        const isExist = state.favoriteMovies.find(item => item.id === action.payload.id)
        if (!isExist) {
          state.favoriteMovies.push(action.payload.movie)
        } else {            
        }
      } else {
        const isExist = state.favoriteSeries.find(item => item.id === action.payload.id)
        if (!isExist) {
          state.favoriteSeries.push(action.payload.movie)
        } else {            
        }
      }          
    },
    removeFromMyList (state, action) {      
      const isExistMovie = state.favoriteMovies.find(item => item.id === action.payload)
      const isExistSerie = state.favoriteSeries.find(item => item.id === action.payload)
      if (isExistMovie || isExistSerie) {        
        state.favoriteMovies = state.favoriteMovies.filter(item => item.id !== action.payload)
        state.favoriteSeries = state.favoriteSeries.filter(item => item.id !== action.payload)
      } else {        
      }
    }, 
  },
});

export const {removeFromMyList, addToMyList} = favoriteSlice.actions;

export default favoriteSlice.reducer;

/* transform object of object into array of object  */
/* 
const objOfObjs = {
   "one": {"id": 3},
   "two": {"id": 4},

   
   
};

const arrayOfObj = Object.entries(objOfObjs).map((e) => ( { [e[0]]: e[1] } )); 


Object.entries(ObjOfObjs).map(e => e[1]) 



*/