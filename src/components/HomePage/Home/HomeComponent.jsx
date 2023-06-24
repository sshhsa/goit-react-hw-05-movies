import { useState, useEffect } from 'react';

import fetchTrendingMovies from 'components/HomePage/Home/trendingMovies';
import HomeList from '../HomeList/HomeList';
import Loader from 'components/Loader/Loader';
import Chapter from 'components/Chapter/Chapter';
import css from './HomeComponent.module.css';

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
    <div className={css.boxTrending}>
      <Chapter chapter="Trending movies" />
      {movies.length === 0 ? <Loader /> : <HomeList movies={movies} />}
    </div>
  );
}

export default HomeComponent;
