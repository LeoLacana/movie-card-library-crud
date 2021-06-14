import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        { title }
        <p>
          { storyline }
        </p>
        <p>
          <Link to={ `movies/${id}` } params={ id }>
            VER DETALHES
          </Link>
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
