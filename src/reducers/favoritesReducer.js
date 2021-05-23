import { ADD_FAVORITES, TOGGLE_FAVORITES, REMOVE_FAVORITES } from '../actions/movieActions.js';
import movies from './../data.js';


const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = ( state = initialState, action ) => {
  const moviesData = movies;

  switch ( action.type ) {
    case ADD_FAVORITES:
      return {
        favorites: [ ...state.favorites, ...moviesData.filter( item => ( action.payload === item.id) ) ],
        displayFavorites: state.displayFavorites
      };
        
    case TOGGLE_FAVORITES:
      return {
        favorites: [...state.favorites],
        displayFavorites: !state.displayFavorites
      };
    
    case REMOVE_FAVORITES:
      return {
        favorites: [ ...state.favorites.filter( item => ( action.payload !== item.id ) ) ],
        displayFavorites: state.displayFavorites
      };
        
    default:
      return state;
  }
};

export default reducer;