import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: [],
};
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToMyList (state, action) {                
        const isExist = state.favorite.find(item => item.id === action.payload.id)
        if (!isExist) {
            state.favorite.push(action.payload)
        } else {            
        }
    },
    removeFromMyList (state, action) {      
      const isExist = state.favorite.find(item => item.id === action.payload)
      if (isExist) {        
        state.favorite = state.favorite.filter(item => item.id !== action.payload)
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