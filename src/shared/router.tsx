import { createBrowserRouter } from 'react-router-dom';
import MovieDetails, { movieLoader } from '../components/movieDetails';
import MovieListPage, { moviesLoader } from '../components/movieListPage';
import Search from '../components/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    loader: moviesLoader,
    children: [
      {
        path: '',
        element: <Search />,
      },
      {
        path: ':movieId',
        element: <MovieDetails />,
        loader: movieLoader,
      },
    ],
  },
]);

export default router;
