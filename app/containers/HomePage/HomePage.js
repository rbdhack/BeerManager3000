/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import BeersListItem from '../../components/BeersListItem/BeersListItem'
import './style.scss'
import { makeBeersList, makeSelectError, makeSelectLoading, pagination } from '../App/selectors'
import { favorites } from './selectors'
import { loadBeersList } from '../App/actions'
import { addToFavorites } from './actions'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static mapSelectors () {
    return {
      favorites: favorites(),
      loading: makeSelectLoading(),
      error: makeSelectError(),
      beers: makeBeersList(),
      pagination: pagination(),
    }
  }

  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount () {
    const { pagination } = this.props
    loadBeersList({ page: pagination.page, showPerPage: pagination.showPerPage })
  }

  loadPage (page, totalPages, event) {
    event.preventDefault()
    const { pagination } = this.props
    if (page <= totalPages && page > 0) {
      loadBeersList({ page, showPerPage: pagination.showPerPage })
    }
  }

  renderPagination () {
    const { pagination } = this.props
    const paginationLinks = []
    //usually, this should not be hardcoded, but there is no end-point to get the total number of pages
    const totalPages = 28
    paginationLinks.push(<li className="page-item"><a className="page-link"
                                                      onClick={this.loadPage.bind(this, pagination.page - 1, totalPages)}
                                                      href="#">Previous</a></li>)
    for (let i = 1; i <= totalPages; i++) {
      if (pagination.page === i) {
        paginationLinks.push(<li className="page-item"><a className="page-link bg-dark" href="#">{i}</a></li>)
      } else {
        paginationLinks.push(<li className="page-item"><a className="page-link"
                                                          onClick={this.loadPage.bind(this, i, totalPages)}
                                                          href="#">{i}</a></li>)
      }
    }
    paginationLinks.push(<li className="page-item"><a className="page-link"
                                                      onClick={this.loadPage.bind(this, pagination.page + 1, totalPages)}
                                                      href="#">Next</a></li>)
    return paginationLinks
  }

  render () {
    const { beers, favorites } = this.props
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Beer brands management page"/>
        </Helmet>
        <div className="home-page">
          <section className="beer-list-container">
            {beers && beers.map((beer, index) => {
              return <BeersListItem favorites={favorites} addToFavorites={addToFavorites}
                                    key={'beer-' + index} {...beer}/>
            })}
          </section>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {this.renderPagination()}
            </ul>
          </nav>
        </div>
      </article>
    )
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  beers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  favorites: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
}
