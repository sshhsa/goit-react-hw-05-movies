import PropTypes from 'prop-types';
import css from './MovieDetailsInformation.module.css';

function MovieDetailsInformation({
  original_title,
  popularity,
  tagline,
  overview,
}) {
  return (
    <div>
      {original_title && (
        <h1 className={css.labelMovieDetails}>{original_title}</h1>
      )}
      {popularity && (
        <span>
          Popularity:
          <span className={css.accentText}> {popularity.toFixed(1)}</span>
        </span>
      )}
      {tagline && <p>{tagline}</p>}
      {overview && (
        <div className={css.containerOverview}>
          <h2 className={css.labelMovie}>Overview</h2>
          <p className={css.textMovieDetails}>{overview}</p>
        </div>
      )}
    </div>
  );
}

MovieDetailsInformation.propTypes = {
  original_title: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieDetailsInformation;
