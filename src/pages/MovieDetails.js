import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({
        loading: false,
        movies: movie,
      }));
  }

  render() {
    const { movies: {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle }, loading } = this.state;
    const { match: { params: { id } } } = this.props;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : (
          <section>
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h3>{ title }</h3>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <p>
              <Link to={ `${id}/edit` } params={ id }>
                EDITAR
              </Link>
            </p>
            <p>
              <Link to="/">
                VOLTAR
              </Link>
            </p>
          </section>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
