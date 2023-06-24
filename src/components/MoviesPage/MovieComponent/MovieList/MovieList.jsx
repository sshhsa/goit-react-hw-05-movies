import PropTypes from 'prop-types';

import MovieListItem from '../MovieListItem/MovieListItem';
import css from './MovieList.module.css';

function MovieList({ filteredQuery }) {
  return (
    <ul className={css.movieList}>
      {filteredQuery.map(query => (
        <MovieListItem key={query.id} query={query} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  filteredQuery: PropTypes.array.isRequired,
};

export default MovieList;
