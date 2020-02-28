import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const BeersListItem = ({ name, description, image_url, tagline, id, addToFavorites, favorites, index, isFavoriteItem }) => (
  <div className="card shadow-sm mb-3">
    <div className="card-header bg-transparent font-weight-bold text-muted text-truncate">{name}</div>
    <div className="card-body">
      <img className="card-img" src={image_url}/>
      <div className="card-right-content">
        <p className="card-text text-info">{tagline}<br/><br/>{description}</p>
      </div>
    </div>
    <div className="card-footer bg-transparent d-flex justify-content-between">
      <a href={`details/${id}`} className="btn btn-outline-primary btn-sm">Details</a>
      {favorites.includes(index) && !isFavoriteItem ? 'Favorite beer' :
        <button type="button" onClick={addToFavorites.bind(this, index)} className="btn btn-outline-success btn-sm">
          {isFavoriteItem ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>}
    </div>
  </div>
)

BeersListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  tagline: PropTypes.string,
  favorites: PropTypes.array,
}

export default BeersListItem
