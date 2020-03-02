import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import BeerDetails from './BeerDetails';

import reducer from '../HomePage/reducer'
import saga from './saga'
import { compose } from 'redux'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

const mapDispatchToProps = (dispatch) => ({
  loadBeerDetails: (beerId) => dispatch(loadBeerDetails(beerId)),
});

const mapStateToProps = createStructuredSelector(BeerDetails.mapSelectors());

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(BeerDetails);
export { mapDispatchToProps };

