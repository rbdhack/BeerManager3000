import { loadBeersList } from '../App/actions'
import { addTofavorites } from '../HomePage/actions'
import { createStructuredSelector } from 'reselect'
import { favorites } from '../HomePage/selectors'
import { connect } from 'react-redux'
import reducer from '../HomePage/reducer'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer';
import FavoritesPage from './FavoritesPage';
import { makeBeersList } from '../App/selectors'

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadBeersList());
  },
  addToFavorites: (id) => dispatch(addTofavorites(id)),
});

const mapStateToProps = createStructuredSelector({
  favorites: favorites(),
  beers: makeBeersList(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(FavoritesPage);
export { mapDispatchToProps };
