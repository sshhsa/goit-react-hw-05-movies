import axios from 'axios';

const tokenForReadingAPI =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzA1YThiYjRmYjI4MDM3Zjg0OGE2M2U2Mzk1ODYwYSIsInN1YiI6IjY0OTFkZWM3NDJiZjAxMDEwMWMwNmYxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v8JiSC6MGrIJNhQDQ5Xq5F8kBA-59crqag8RKhvlczY';
const API_KEY = 'bc05a8bb4fb28037f848a63e6395860a';

async function fetchTrendingMovies(query) {
  try {
    const url = `https://www.themoviedb.org/trending/get-trending?key=${API_KEY}&q=${query}`;
    const response = await axios.get(url);

    if (response.data.length === 0) {
      throw new Error('Backend is empty by this request');
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchTrendingMovies;
