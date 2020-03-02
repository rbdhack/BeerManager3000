/**
 * Beer Details page
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { makeBeerDetails, makeSelectError, makeSelectLoading } from '../App/selectors'
import { loadBeerDetails } from '../App/actions'
import { addToFavorites } from '../HomePage/actions'
import { favorites } from '../HomePage/selectors'
const mapPropertiesToNames = {
  'name': 'Beer Name:',
  'tagline': 'Tagline:',
  'first_brewed': 'First brewed at:',
  'description': 'Description:',
  'brewers_tips': 'Brewer Tips: '
}
export default class BeerDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static mapSelectors () {
    return {
      loading: makeSelectLoading(),
      error: makeSelectError(),
      beerDetails: makeBeerDetails(),
      favoriteBeers: favorites(),
    }
  }

  componentDidMount () {
    const { match } = this.props
    loadBeerDetails(match.params.id)
  }

  rederBeerDetailsTable() {
    const { beerDetails } = this.props
    return (beerDetails && Object.keys(mapPropertiesToNames)
      .map((key, index) => {
          return (
            <div key={'row' + index} className="row bg-light">
              <div className="col-3 font-weight-bold">
                {mapPropertiesToNames[key]}
              </div>
              <div className="col-10">
                {beerDetails[key]}
              </div>
            </div>)
      }));
  }

  render () {
    const { beerDetails, favoriteBeers } = this.props
    const isFavoriteBeer = favoriteBeers && favoriteBeers.includes(beerDetails.id);
    return (
      <div className="container border-dark bg-light shadow-sm container px-lg-5">
        <div className="col-3 font-weight-bold float-left">
          <img src={beerDetails.image_url} className="col-4"/>
        </div>
        {this.rederBeerDetailsTable()}
        {beerDetails && <div className="row">
            <div className="card bg-light border-0">
              <div className="card-body text-center">
                  <button data-toggle={isFavoriteBeer} type="button" onClick={addToFavorites.bind(this, beerDetails.id)} className="btn btn-outline-success btn-sm">
                    {isFavoriteBeer ? 'Favorite' : 'Add to Favorites'}
                  </button>
              </div>
            </div>
        </div>}
      </div>
    )
  }
}

BeerDetails.propTypes = {
  beerDetails: PropTypes.object,
  favoriteBeers: PropTypes.array,
}
