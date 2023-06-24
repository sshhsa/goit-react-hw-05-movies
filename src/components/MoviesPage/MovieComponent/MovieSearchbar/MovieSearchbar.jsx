import { GoSearch } from 'react-icons/go';
import css from './MovieSearchbar.module.css';

function MovieSearchbar({
  isQueryEmpty,
  inputQuery,
  setSearchParams,
  setResults,
}) {
  const updateQueryString = event => {
    const queryIdValue = event.target.value;
    if (queryIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryIdValue });
  };

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

  return (
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
  );
}
export default MovieSearchbar;
