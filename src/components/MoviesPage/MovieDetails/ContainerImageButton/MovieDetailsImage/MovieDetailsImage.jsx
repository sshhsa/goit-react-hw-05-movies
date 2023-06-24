import PropTypes from 'prop-types';
import css from './MovieImage.module.css';

function MovieDetailsImage({ poster_path, original_title }) {
  const imageUrl = `https://image.tmdb.org/t/p/w400/${poster_path}`;
  return (
    <img
      src={imageUrl}
      alt={original_title}
      className={css.imageMovieDetails}
    />
  );
}

MovieDetailsImage.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
};

export default MovieDetailsImage;
