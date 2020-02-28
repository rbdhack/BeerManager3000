/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOAD_BEERS = 'boilerplate/App/LOAD_BEERS';
export const LOAD_BEERS_SUCCESS = 'boilerplate/App/LOAD_BEERS_SUCCESS';
export const LOAD_BEERS_ERROR = 'boilerplate/App/LOAD_BEERS_ERROR';
export const LOAD_BEER_DETAILS = 'boilerplate/App/LOAD_BEERS';
export const LOAD_BEER_DETAILS_SUCCESS = 'boilerplate/App/LOAD_BEER_DETAILS_SUCCESS';
export const LOAD_BEER_DETAILS_ERROR = 'boilerplate/App/LOAD_BEER_DETAILS_ERROR';
export const DEFAULT_LOCALE = 'en';
