import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeBeersList
} from '../../containers/App/selectors';
import { loadBeersList } from '../App/actions';
import { addTofavorites } from './actions';
import { favorites } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadBeersList());
  },
  addToFavorites: (id) => dispatch(addTofavorites(id)),
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  favorites: favorites(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  beers: makeBeersList(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
