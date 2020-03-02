/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FavoritesPage from 'containers/FavoritesPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import BeerDetails from 'containers/BeerDetails/Loadable'

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/favorites" component={FavoritesPage} />
      <Route path="/details/:id" component={BeerDetails} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
