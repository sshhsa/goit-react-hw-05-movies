import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import fetchTrendingMovies from 'services/trendingMovies';
import css from './Home.module.css';

function HomeComponent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetchTrendingMovies();
      setMovies(fetchedMovies);
    };

    fetchData();
  }, []);

  return (
    <ul className={css.trendingListMovies}>
      {movies.map(movie => (
        <li key={movie.id} className={css.contactsListItem}>
          <NavLink to={movie.id} className={css.movieLink}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default HomeComponent;
