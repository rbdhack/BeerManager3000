/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import config from '../../utils/config';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError, beersListLoaded, beersListLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { LOAD_BEERS } from '../App/constants'

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_BEERS, getBeersList);
}

/*
  * Get a list of all beers
 */
export function* getBeersList() {
  // Select username from store
  const callURL = config.URL.APIRoot + config.URL.getBeers;
  try {
    // Call our request helper (see 'utils/request')
    const beersList = yield call(request, callURL);
    yield put(beersListLoaded(beersList));
  } catch (err) {
    yield put(beersListLoadingError(err));
  }
}
