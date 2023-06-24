import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './HomeListItem.module.css';

function HomeListItem({ movie }) {
  const location = useLocation();

  return (
    <li>
      <NavLink
        to={`/movies/${movie.id}`}
        state={{ from: location }}
        className={css.homeListLink}
      >
        {movie.title}
      </NavLink>
    </li>
  );
}

HomeListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default HomeListItem;
