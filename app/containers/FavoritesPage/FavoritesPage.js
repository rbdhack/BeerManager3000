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
    if (favorites.length === 0) {
      return (
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">No beers selected as favorites</h5>
            <p className="card-text">If you want to select a beer as favorite, go back to the beers list page and click the 'Add to Favorites' button</p>
            <a href="/" className="btn btn-primary">Go to beers page</a>
          </div>
        </div>
      );
    }

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Beer brands management page" />
        </Helmet>
        <div className="home-page">
          <section className="beer-list-container">
            { favorites && favorites.map((favorite, index) => {
              /* find beer by id */
              let favoriteBeer = {};
              for (let i = 0; i<beers.length; i++) {
                if (beers[i].id === favorite) {
                  favoriteBeer = beers[i];
                  break;
                }
              }
              return <BeersListItem isFavoriteItem={true} favorites={favorites} addToFavorites={addToFavorites} key={'beer-' + index} {...favoriteBeer} />;
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
