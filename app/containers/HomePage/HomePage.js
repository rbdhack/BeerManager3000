/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import BeersListItem from '../../components/BeersListItem/BeersListItem';
import './style.scss';
import { makeBeersList, makeSelectError, makeSelectLoading } from '../App/selectors'
import { favorites } from './selectors'
import { loadBeersList } from '../App/actions';
import { addToFavorites } from './actions';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static mapSelectors() {
    return {
      favorites: favorites(),
      loading: makeSelectLoading(),
      error: makeSelectError(),
      beers: makeBeersList(),
    }
  }

  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    loadBeersList();
  }

  render() {
    const { beers, favorites } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Beer brands management page" />
        </Helmet>
        <div className="home-page">
          <section className="beer-list-container">
            { beers && beers.map((beer, index) => {
              return <BeersListItem favorites={favorites} addToFavorites={addToFavorites} key={'beer-' + index} {...beer}/>;
            })}
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  beers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  favorites: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};
