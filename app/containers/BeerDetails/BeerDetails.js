/**
 * Beer Details page
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class BeerDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    const { match, loadBeerDetails } = this.props
    if (typeof loadBeerDetails === 'function') {
      loadBeerDetails(match.params.id)
    }
  }

  render () {
    const { beerDetails } = this.props
    return (
      <div className="container border-dark bg-white shadow-sm">
        {beerDetails && Object.keys(beerDetails)
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
          })}
      </div>
    )
  }
}

BeerDetails.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
}
