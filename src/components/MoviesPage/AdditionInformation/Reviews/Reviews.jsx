import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';
import fetchGetMovieReviews from './getMovieReviews';

function Reviews() {
  const { movie_id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchDataReviews = async () => {
      const fetchedReviews = await fetchGetMovieReviews(movie_id);
      setReviews(fetchedReviews);
    };

    fetchDataReviews();
  }, [movie_id]);

  return (
    <ul className={css.reviews}>
      {reviews ? (
        reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p className={css.messageEmptyReviews}>
          We don`t have any reviews for this movie
        </p>
      )}
    </ul>
  );
}

export default Reviews;
