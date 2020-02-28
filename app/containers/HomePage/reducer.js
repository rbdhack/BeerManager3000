import { ADD_TO_FAVORITES } from './constants';

// The initial state of the App
const initialState = {
  favorites: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const newFavorites = state.favorites;
      if (!newFavorites.includes(action.itemId)) {
        newFavorites.push(action.itemId);
      } else {
        newFavorites.splice(newFavorites.indexOf(action.itemId), 1);
      }
      console.log(newFavorites);
      return { ...state, favorites: [...newFavorites] };
    default:
      return state;
  }
}

export default homeReducer;
