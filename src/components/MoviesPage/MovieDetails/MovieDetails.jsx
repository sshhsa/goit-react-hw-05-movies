import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import MovieDetailsImage from './ContainerImageButton/MovieDetailsImage/MovieDetailsImage';
import MovieDetailsButtonGoBack from './ContainerImageButton/MovieDetailsButtonGoBack/MovieDetailsButtonGoBack';
import MovieDetailsInformation from './ContainerInfo/MovieDetailsInformation/MovieDetailsInformation';
import MovieDetailsAddInfo from './ContainerInfo/MovieDetailsAddInfo/MovieDetailsAddInfo';

import fetchGetMovieDetails from './getMovieDetails';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

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

  return (
    <>
      <div className={css.movieDetails}>
        <div className={css.movieImageButton}>
          <MovieDetailsButtonGoBack />
          {poster_path && (
            <MovieDetailsImage
              poster_path={poster_path}
              original_title={original_title}
            />
          )}
        </div>
        <div className={css.movieTextInfo}>
          <MovieDetailsInformation
            original_title={original_title}
            popularity={popularity}
            tagline={tagline}
            overview={overview}
          />
          <MovieDetailsAddInfo movie_id={movie_id} />
        </div>
      </div>
      <div className={css.contentAddInfo}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default MovieDetails;
