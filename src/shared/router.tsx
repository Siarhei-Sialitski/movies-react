import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import AddMovieForm from '../components/addMovieForm';
import EditMovieForm from '../components/editMovieForm';
import ErrorPage from '../components/errorPage';
import MovieDetails, { movieLoader } from '../components/movieDetails';
import MovieListPage, { moviesLoader } from '../components/movieListPage';
import SearchForm from '../components/searchForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<MovieListPage />}
      loader={moviesLoader}
      errorElement={<ErrorPage />}
      shouldRevalidate={() => true}
    >
      <Route errorElement={<ErrorPage />}>
        <Route path='' element={<SearchForm />}>
          <Route path='new' element={<AddMovieForm />} />
        </Route>
        <Route
          path=':movieId'
          element={<MovieDetails />}
          loader={movieLoader}
          shouldRevalidate={() => true}
        >
          <Route path='edit' element={<EditMovieForm />} loader={movieLoader} />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
