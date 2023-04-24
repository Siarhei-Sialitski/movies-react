import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/errorPage';
import MovieDetails, { movieLoader } from '../components/movieDetails';
import MovieListPage, { moviesLoader } from '../components/movieListPage';
import Search from '../components/search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    errorElement: <ErrorPage />,
    loader: moviesLoader,
    children: [
      {
        element: <Search />,
        index: true,
      },
      {
        path: ':movieId',
        element: <MovieDetails />,
        loader: movieLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
