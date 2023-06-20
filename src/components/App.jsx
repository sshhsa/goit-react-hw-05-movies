import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Movies from 'pages/Movie';

// import SharedLayout from './SharedLayout/SharedLayout';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}></Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
