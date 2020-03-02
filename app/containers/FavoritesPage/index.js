import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import reducer from '../HomePage/reducer'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer';
import FavoritesPage from './FavoritesPage';

const mapStateToProps = createStructuredSelector(FavoritesPage.mapSelectors());

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(FavoritesPage);
