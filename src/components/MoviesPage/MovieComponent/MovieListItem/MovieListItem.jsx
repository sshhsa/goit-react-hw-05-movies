import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

import css from './MovieListItem.module.css';

function MovieListItem({ query }) {
  const location = useLocation();
  return (
    <li>
      <NavLink
        to={`/movies/${query.id}`}
        state={{ from: location }}
        className={css.movieListItemNavLink}
      >
        {query.title}
      </NavLink>
    </li>
  );
}

MovieListItem.propTypes = {
  query: PropTypes.object.isRequired,
};

export default MovieListItem;
