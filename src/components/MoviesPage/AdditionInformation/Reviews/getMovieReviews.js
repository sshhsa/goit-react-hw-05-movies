import axios from 'axios';
import { API_KEY } from '../../../../services/apiKey';

async function fetchGetMovieReviews(movie_id) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);

    if (response.data.results.length === 0) {
      throw new Error('Backend is empty by this request');
    }

    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchGetMovieReviews;

// https://api.themoviedb.org/3/movie/569094/reviews?api_key=bc05a8bb4fb28037f848a63e6395860a

// {
//     "id": 569094,
//         "page": 1,
//             "results": [
//                 {
//                     "author": "garethmb",
//                     "author_details": {
//                         "name": "",
//                         "username": "garethmb",
//                         "avatar_path": "/https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg",
//                         "rating": null
//                     },
//                     "content": "Life as a teenager is never easy",
//                     "created_at": "2023-05-31T14:58:50.182Z",
//                     "id": "647760aad3719700f9cad266",
//                     "updated_at": "2023-05-31T14:58:50.267Z",
//                     "url": "https://www.themoviedb.org/review/647760aad3719700f9cad266"
//                 }]
// }
