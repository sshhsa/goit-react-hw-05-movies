import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import fetchTrendingMovies from 'components/HomePage/Home/trendingMovies';
import css from './Home.module.css';

function HomeComponent() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
          <NavLink
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.movieLink}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default HomeComponent;
