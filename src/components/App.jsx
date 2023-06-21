import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movie';
import SharedLayout from './SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound';

import MovieDetails from './MoviesPage/MovieDetails/MovieDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":movieId/" element={<MovieDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
