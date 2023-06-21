import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import fetchGetMovieDetails from './getMovieDetails';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      const details = await fetchGetMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchMovieDetailsData();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Backend is empty by this request</p>;
  }

  return (
    <div>
      <span classNAme={css.languageMovieDetails}>
        {movieDetails.original_language}
      </span>
      <h2 className={css.labelMovieDetails}>{movieDetails.original_title}</h2>
      <p className={css.textMovieDetails}>{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
