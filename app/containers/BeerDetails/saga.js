/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import config from '../../utils/config';
import {  beerDetailsLoaded, beerDetailsLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { LOAD_BEER_DETAILS } from '../App/constants'
import { setParams } from '../../utils/request'

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_BEER_DETAILS, getBeerDetails);
}

/*
  * Get a list of all beers
 */
export function* getBeerDetails(payload) {
  const { beerId } = payload;
  // Select username from store
  const callURL = config.URL.APIRoot + setParams({beerId}, config.URL.getBeerDetails);
  try {
    // Call our request helper (see 'utils/request')
    const beerDetails = yield call(request, callURL);
    yield put(beerDetailsLoaded(beerDetails[0]));
  } catch (err) {
    yield put(beerDetailsLoadingError(err));
  }
}
