import axios from 'axios';
import { API_KEY } from '../../../services/apiKey';

async function fetchTrendingMovies() {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(url);

    if (
      response.data &&
      response.data.results &&
      response.data.results.length > 0
    ) {
      return response.data.results;
    } else {
      throw new Error('Backend is empty or response format is incorrect');
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchTrendingMovies;

// https://api.themoviedb.org/3/trending/movie/day?api_key=bc05a8bb4fb28037f848a63e6395860a

// {
//     "page": 1,
//         "results": [
//             {
//                 "adult": false,
//                 "backdrop_path": "/wRxLAw4l17LqiFcPLkobriPTZAw.jpg",
//                 "id": 697843,
//                 "title": "Extraction 2",
//                 "original_language": "en",
//                 "original_title": "Extraction 2",
//                 "overview": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Sydney, in order to get revenge.",
//                 "poster_path": "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
//                 "media_type": "movie",
//                 "genre_ids": [
//                     28,
//                     53
//                 ],
//                 "popularity": 1653.383,
//                 "release_date": "2023-06-12",
//                 "video": false,
//                 "vote_average": 7.868,
//                 "vote_count": 561
//             }]
// }
