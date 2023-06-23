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
  );
}

export default Cast;
