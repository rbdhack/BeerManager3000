/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, takeLatest
} from 'redux-saga/effects';
import config from '../../utils/config';
import { beersListLoaded, beersListLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { LOAD_BEERS } from '../App/constants'
import { setParams } from '../../utils/request'

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_BEERS, getBeersList);
}

/*
  * Get a list of all beers
 */
export function* getBeersList(action) {
  const { pagination } = action;
  let url = config.URL.getBeers;
  if (pagination) {
    url = setParams(pagination, config.URL.getBeersPage);
  }
  // Select username from store
  const callURL = config.URL.APIRoot + url;
  try {
    // Call our request helper (see 'utils/request')
    const beersList = yield call(request, callURL);
    yield put(beersListLoaded(beersList, pagination));
  } catch (err) {
    yield put(beersListLoadingError(err));
  }
}
