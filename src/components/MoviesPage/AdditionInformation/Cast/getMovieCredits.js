import axios from 'axios';
import { API_KEY } from '../../../../services/apiKey';

async function fetchGetMovieCredits(movie_id) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);

    if (response.data.cast.length === 0) {
      throw new Error('Backend is empty by this request');
    }

    return response.data.cast;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchGetMovieCredits;

// https://api.themoviedb.org/3/movie/569094/credits?api_key=bc05a8bb4fb28037f848a63e6395860a

// {
//     "id": 569094,
//         "cast": [
//             {
//                 "adult": false,
//                 "gender": 2,
//                 "id": 587506,
//                 "known_for_department": "Acting",
//                 "name": "Shameik Moore",
//                 "original_name": "Shameik Moore",
//                 "popularity": 29.028,
//                 "profile_path": "/uJNaSTsfBOvtFWsPP23zNthknsB.jpg",
//                 "cast_id": 705,
//                 "character": "Miles Morales / Spider-Man (voice)",
//                 "credit_id": "6489a4f8e375c000e251ab48",
//                 "order": 0
//             }]
// }
