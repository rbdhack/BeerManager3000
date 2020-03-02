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
    return (beerDetails && Object.keys(beerDetails)
      .map((key, index) => {
        const beerDetailRow = beerDetails[key]
        if (typeof beerDetailRow !== 'array' && typeof beerDetailRow !== 'object') {
          return (
            <div key={'row' + index} className="row border-bottom">
              <div className="col-2 font-weight-bold">
                {key}
              </div>
              <div className="col-6">
                {beerDetailRow}
              </div>
            </div>)
        } else {
          return ''
        }
      }));
  }

  render () {
    const { beerDetails, favoriteBeers } = this.props
    return (
      <div className="container border-dark bg-white shadow-sm">
        {this.rederBeerDetailsTable()}
        {beerDetails && <div className="row border-bottom">
            <div className="card">
              <div className="card-body text-center">
                {favoriteBeers && favoriteBeers.includes(beerDetails.id)  ? 'Favorite beer' :
                  <button type="button" onClick={addToFavorites.bind(this, beerDetails.id)} className="btn btn-outline-success btn-sm">
                    'Add to Favorites'
                  </button>}
              </div>
            </div>
        </div>}
      </div>
    )
  }
}

BeerDetails.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
}
