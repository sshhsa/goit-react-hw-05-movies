import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import fetchGetMovieCredits from './getMovieCredits';
import css from './Cast.module.css';

function Cast() {
  const { movie_id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchDataCast = async () => {
      const fetchedCasts = await fetchGetMovieCredits(movie_id);
      setCasts(fetchedCasts);
    };

    fetchDataCast();
  }, [movie_id]);

  return (
    <div className={css.boxReviews}>
      {casts.length === 0 ? (
        <p className={css.messageEmptyCast}>
          We don`t have any cast for this movie
        </p>
      ) : (
        <ul className={css.castList}>
          {casts.map(
            cast =>
              cast.profile_path && (
                <li key={cast.id} className={css.castListItem}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                    alt={cast.name}
                    className={css.imageCast}
                  />
                  <h3 className={css.castItemName}>{cast.name}</h3>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}

export default Cast;
