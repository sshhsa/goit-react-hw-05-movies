import HomeListItem from '../HomeListItem/HomeListItem';
import PropTypes from 'prop-types';

import css from './HomeList.module.css';

function HomeList({ movies }) {
  return (
    <ul className={css.homeList}>
      {movies.map(movie => (
        <HomeListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

HomeList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default HomeList;
