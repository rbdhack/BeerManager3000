import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const favorites = () => createSelector(
  selectHome,
  (homeState) => {
    let io = 1;
   return homeState.favorites;
  }
);

export {
  selectHome,
  favorites,
};
