import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

import fetchSearchMovies from './searchMovies';
import { GoSearch } from 'react-icons/go';
import Loader from 'components/Loader/Loader';

import css from './Movie.module.css';

function MovieComponent() {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  const [isLoadingMovieSearch, setIsLoadingMovieSearch] = useState(false);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);

  const updateQueryString = event => {
    const queryIdValue = event.target.value;
    if (queryIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryIdValue });
  };

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

  const handleSubmitMovie = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const queryValue = form.elements.inputQuery.value;
    if (queryValue === '') {
      setSearchParams({});
      setResults([]);
    } else {
      setSearchParams({ query: queryValue });
    }

    form.reset();
  };

  const filteredQuery =
    results.length > 0
      ? results.filter(query => query.title.includes(inputQuery))
      : [];

  const isQueryEmpty = inputQuery === '';

  return (
    <div className={css.boxMovie}>
      <form onSubmit={handleSubmitMovie} className={css.formSearchMovie}>
        <input
          type="text"
          value={inputQuery}
          name="inputQuery"
          onChange={updateQueryString}
          placeholder="Search movie"
          className={css.inputSearch}
        />
        <button
          type="submit"
          className={css.buttonSearch}
          disabled={isQueryEmpty}
        >
          <GoSearch className={css.iconSearch} />
        </button>
      </form>

      {isLoadingMovieSearch && !isSearchCompleted ? (
        <Loader />
      ) : filteredQuery.length > 0 ? (
        <ul className={css.listMovies}>
          {filteredQuery.map(query => (
            <li key={query.id}>
              <NavLink
                to={`/movies/${query.id}`}
                state={{ from: location }}
                className={css.movieNavLink}
              >
                {query.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : isSearchCompleted ? (
        <p className={css.messageEmptyReviews}>
          We don't have any results for this movie
        </p>
      ) : null}
    </div>
  );
}

export default MovieComponent;
