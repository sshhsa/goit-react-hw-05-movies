import { useEffect, useState, Suspense } from 'react';
import { Outlet, NavLink, useParams, useLocation } from 'react-router-dom';

import fetchGetMovieDetails from './getMovieDetails';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGetMovieDetails(movie_id);
        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movie_id]);

  if (!movieDetails) {
    return <Loader />;
  }

  const { poster_path, original_title, popularity, tagline, overview } =
    movieDetails;

  const imageUrl = `https://image.tmdb.org/t/p/w400/${poster_path}`;

  return (
    <div>
      <div className={css.movieDetails}>
        <div className={css.movieImageButton}>
          <NavLink
            to={location.state?.from ?? '/home'}
            className={css.buttonGoBack}
          >
            Go back
          </NavLink>
          {poster_path && (
            <img
              src={imageUrl}
              alt={original_title}
              className={css.imageMovieDetails}
            />
          )}
        </div>
        <div className={css.movieTextInfo}>
          <div className={css.containerInfo}>
            {original_title && (
              <h1 className={css.labelMovieDetails}>{original_title}</h1>
            )}
            {popularity && (
              <span>
                Popularity:
                <span className={css.accentText}> {popularity.toFixed(1)}</span>
              </span>
            )}
            {tagline && <p>{tagline}</p>}
            {overview && (
              <>
                <h2 className={css.labelMovie}>Overview</h2>
                <p className={css.textMovieDetails}>{overview}</p>
              </>
            )}
          </div>
          <div className={css.addInfoBox}>
            <h2 className={css.labelMovie}>Addition information</h2>
            <NavLink to={`/movies/${movie_id}/cast`}>Cast</NavLink>
            <NavLink to={`/movies/${movie_id}/reviews`}>Review</NavLink>
          </div>
        </div>
      </div>
      <div className={css.contentAddInfo}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default MovieDetails;
