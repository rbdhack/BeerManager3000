/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import BeersListItem from '../../components/BeersListItem/BeersListItem'
import PropTypes from 'prop-types'

export default class FavoritesPage extends React.Component {
  render() {
    const { beers, addToFavorites, favorites } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Beer brands management page" />
        </Helmet>
        <div className="home-page">
          <section className="beer-list-container">
            { favorites && favorites.map((favorite, index) => {
              return <BeersListItem index={index} isFavoriteItem={true} favorites={favorites} addToFavorites={addToFavorites} key={'beer-' + index} {...beers[favorite]} />;
            })}
          </section>
        </div>
      </article>
    );
  }
}

FavoritesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  beers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
};
