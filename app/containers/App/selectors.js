import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.currentUser
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.repositories
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

const makeBeersList = () => createSelector(
  selectGlobal,
  (globalState) => globalState.beers
)

const makeBeerDetails = () => createSelector(
  selectGlobal,
  (globalState) => globalState.beerDetails
)

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeBeersList,
  makeBeerDetails
};
