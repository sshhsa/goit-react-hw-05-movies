import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import fetchTrendingMovies from 'components/HomePage/Home/trendingMovies';
import Loader from 'components/Loader/Loader';
import Chapter from 'components/Chapter/Chapter';
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
      <Chapter chapter="Trending movies" />
      {movies.length === 0 ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}

export default HomeComponent;
