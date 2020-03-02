import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
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
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeBeersList,
  makeBeerDetails
};
