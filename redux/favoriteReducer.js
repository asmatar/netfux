import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteMovies: [],
  favoriteSeries: [],
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
        } 
      } else {
        const isExist = state.favoriteSeries.find(item => item.id === action.payload.id)
        if (!isExist) {
          state.favoriteSeries.push(action.payload.movie)
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