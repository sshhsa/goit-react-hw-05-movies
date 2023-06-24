import { useSearchParams } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

import MovieSearchbar from './MovieSearchbar/MovieSearchbar';
import MovieList from './MovieList/MovieList';
import css from './MovieComponent.module.css';

import fetchSearchMovies from './searchMovies';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/Message';

function MovieComponent() {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputQuery = searchParams.get('query') ?? '';
  const [isLoadingMovieSearch, setIsLoadingMovieSearch] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);

  useEffect(() => {
    if (inputQuery === '') return;

    const fetchSearchData = async () => {
      const fetchedSearchData = await fetchSearchMovies(inputQuery);
      setResults(fetchedSearchData);
      setIsSearchCompleted(true);
    };
    fetchSearchData();
    setIsLoadingMovieSearch(true);
  }, [inputQuery]);

  const filteredQuery =
    results.length > 0
      ? results.filter(query => query.title.includes(inputQuery))
      : [];

  const isQueryEmpty = inputQuery === '';

  return (
    <div className={css.boxMovie}>
      <MovieSearchbar
        isQueryEmpty={isQueryEmpty}
        inputQuery={inputQuery}
        setSearchParams={setSearchParams}
        setResults={setResults}
      />
      {isLoadingMovieSearch && !isSearchCompleted ? (
        <Loader />
      ) : filteredQuery.length > 0 ? (
        <MovieList filteredQuery={filteredQuery} />
      ) : isSearchCompleted ? (
        <Message message="We don't have any results for this movie" />
      ) : null}
    </div>
  );
}

export default MovieComponent;
