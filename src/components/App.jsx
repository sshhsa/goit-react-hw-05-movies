import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Home from 'pages/Home';
import Movies from 'pages/Movie';
import SharedLayout from './SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound';

import MovieDetails from './MoviesPage/MovieDetails/MovieDetails';

const Cast = lazy(() => import('./MoviesPage/AdditionInformation/Cast/Cast'));
const Reviews = lazy(() =>
  import('./MoviesPage/AdditionInformation/Reviews/Reviews')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movie_id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
