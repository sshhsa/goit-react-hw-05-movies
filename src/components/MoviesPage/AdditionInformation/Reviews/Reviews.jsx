import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import fetchGetMovieReviews from './getMovieReviews';
import Loader from 'components/Loader/Loader';
import Message from 'components/Message/Message';

import css from './Reviews.module.css';

function Reviews() {
  const { movie_id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  useEffect(() => {
    const fetchDataReviews = async () => {
      const fetchedReviews = await fetchGetMovieReviews(movie_id);
      setReviews(fetchedReviews);
      setIsLoadingReviews(true);
    };

    fetchDataReviews();
  }, [movie_id]);

  return (
    <div className={css.boxReviews}>
      {!isLoadingReviews ? (
        <Loader />
      ) : reviews.length === 0 ? (
        <Message message="We don't have any reviews for this movie" />
      ) : (
        <ul className={css.listReviews}>
          {reviews.map(review => (
            <li key={review.id} className={css.itemReviews}>
              <h3 className={css.labelReviews}>
                <span className={css.accentText}>Author: </span>
                {review.author}
              </h3>
              <p className={css.contentReviews}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
