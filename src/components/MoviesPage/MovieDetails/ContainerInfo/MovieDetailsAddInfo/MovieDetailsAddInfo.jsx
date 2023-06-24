import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MovieDetailsAddInfo.module.css';

function MovieDetailsAddInfo({ movie_id }) {
  return (
    <div className={css.containerAddInfo}>
      <h2 className={css.labelAddInfo}>Addition information</h2>
      <ul className={css.addInfoList}>
        <li>
          <NavLink
            to={`/movies/${movie_id}/cast`}
            className={css.addInfoNavLink}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/movies/${movie_id}/reviews`}
            className={css.addInfoNavLink}
          >
            Review
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

MovieDetailsAddInfo.propTypes = {
  movie_id: PropTypes.string.isRequired,
};

export default MovieDetailsAddInfo;
