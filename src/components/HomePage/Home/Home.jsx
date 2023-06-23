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
    <div className={css.boxTrending}>
      <h1 className={css.labelTrending}>Trending movies</h1>
      <ul className={css.trendingListMovies}>
        {movies.map(movie => (
          <li key={movie.id}>
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
    </div>
  );
}

export default HomeComponent;
