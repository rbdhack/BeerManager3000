/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as actionTypes from './constants';
import store from '../../store';
const { dispatch } = store;

/**
 * Load the list of beers from the API, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BEERS
 */
export function loadBeersList() {

  return dispatch({
    type: actionTypes.LOAD_BEERS,
  });
}

/**
 * Dispatched when the list of beers is loaded by the request saga
 *
 * @param  {array} beersList The repository data
 *
 * @return {object} An action object with a type of LOAD_BEERS_SUCCESS passing the repos
 */
export function beersListLoaded(beersList) {
  return dispatch({
    type: actionTypes.LOAD_BEERS_SUCCESS,
    beersList,
  });
}

/**
 * Dispatched when loading the beers list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BEERS_ERROR passing the error
 */
export function beersListLoadingError(error) {
  return dispatch({
    type: actionTypes.LOAD_BEERS_ERROR,
    error,
  });
}

/**
 * Load the list of beers from the API, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_BEER_DETAILS
 */
export function loadBeerDetails(beerId) {
  return dispatch({
    type: actionTypes.LOAD_BEER_DETAILS,
    beerId
  });
}

/**
 * Dispatched when the list of beers is loaded by the request saga
 *
 * @param  {array} beersList The repository data
 *
 * @return {object} An action object with a type of LOAD_BEER_SUCCESS passing the repos
 */
export function beerDetailsLoaded(beerDetails) {
  return dispatch({
    type: actionTypes.LOAD_BEER_DETAILS_SUCCESS,
    beerDetails,
  });
}

/**
 * Dispatched when loading the beers list fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BEERS_ERROR passing the error
 */
export function beerDetailsLoadingError(error) {
  return dispatch({
    type: actionTypes.LOAD_BEER_DETAILS_ERROR,
    error,
  });
}
