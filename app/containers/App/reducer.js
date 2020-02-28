import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_BEERS,
  LOAD_BEERS_SUCCESS,
  LOAD_BEERS_ERROR,
  LOAD_BEER_DETAILS, LOAD_BEER_DETAILS_SUCCESS, LOAD_BEER_DETAILS_ERROR,
} from './constants'

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  beers: false,
  beerDetails: false,
  userData: {
    repositories: false,
  },
};

function appReducer(state = initialState, action) {
  console.log('Old App state: ', state);
  console.log('New action: ', action);
  switch (action.type) {
    case LOAD_REPOS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        userData: {
          repositories: false,
        },
      };

      return newState;
    }
    case LOAD_REPOS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        },
        currentUser: action.username,
      };
      return newState;
    }

    case LOAD_REPOS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    case LOAD_BEERS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
      };

      return newState;
    }

    case LOAD_BEERS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        beers: action.beersList,
      };
      return newState;
    }

    case LOAD_BEERS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    case LOAD_BEER_DETAILS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
      };

      return newState;
    }

    case LOAD_BEER_DETAILS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        beerDetails: action.beerDetails,
      };
      return newState;
    }

    case LOAD_BEER_DETAILS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    default:
      return state;
  }

}

export default appReducer;
