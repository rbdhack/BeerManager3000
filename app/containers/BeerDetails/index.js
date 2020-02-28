import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BeerDetails from './BeerDetails';
import { loadBeerDetails } from '../App/actions'
import reducer from '../HomePage/reducer'
import saga from './saga'
import { compose } from 'redux'
import { makeBeerDetails, makeSelectLoading, makeSelectError } from '../App/selectors'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

const mapDispatchToProps = (dispatch) => ({
  loadBeerDetails: (beerId) => dispatch(loadBeerDetails(beerId)),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  beerDetails: makeBeerDetails()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(BeerDetails);
export { mapDispatchToProps };

