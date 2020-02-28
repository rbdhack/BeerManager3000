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

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { onSubmitForm } = this.props;
    onSubmitForm();
  }

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
            { beers && beers.map((beer, index) => {
              return <BeersListItem favorites={favorites} addToFavorites={addToFavorites} key={'beer-' + index} {...beer} />;
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
  onSubmitForm: PropTypes.func,
};
