import axios from 'axios';
import { API_KEY } from './apiKey';

async function fetchSearchMovies(query) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    const response = await axios.get(url);

    if (response.results.length === 0) {
      throw new Error('Backend is empty by this request');
    }

    return response.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchSearchMovies;

// https://api.themoviedb.org/3/search/movie?api_key=bc05a8bb4fb28037f848a63e6395860a&query=action

// {
//     "page": 1,
//         "results": [
//             {
//                 "adult": false,
//                 "backdrop_path": "/3bsCC10rhLaL60D2GBqcJguEaJN.jpg",
//                 "genre_ids": [
//                     18
//                 ],
//                 "id": 137599,
//                 "original_language": "en",
//                 "original_title": "Action",
//                 "overview": "Bruno is an idealistic hero who questions the meaning of life in this confusing and sometimes hallucinatory erotic drama. After a night in jail, he is gang-raped by punk rockers in a garbage dump. He later saves an old man who believes he is Garibaldi and a woman he believes is Ophelia. Bruno watches helplessly as she later jumps from a window.",
//                 "popularity": 2.574,
//                 "poster_path": "/9VhkxeP1uX39skDb1l4KEn8EsKS.jpg",
//                 "release_date": "1980-01-04",
//                 "title": "Action",
//                 "video": false,
//                 "vote_average": 4.4,
//                 "vote_count": 14
//             }]
// }
