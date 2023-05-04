import React from 'react';
import {
  LoaderFunction,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from 'react-router-dom';
import { getMovie } from '../../shared/api';
import { IMovie } from '../../shared/types';
import { minutesToHMText } from '../../utils/dateTimeUtils';
import MovieGenres from '../movieGenres';
import useStyles from './styles';

const MovieDetails: React.FC = () => {
  const movie = useLoaderData() as IMovie;
  const styles = useStyles();

  return (
    <div className={styles.container} data-testid='moviedetailsrootcontainer'>
      <img className={styles.image} src={movie.poster_path} alt={movie.title} />
      <div className={styles.content}>
        <div className={styles.movieName}>
          <span className={styles.movieName} data-testid='moviedetails-title'>
            {movie.title}
          </span>
        </div>
        <div className={styles.rating}>
          <span className={styles.detailsRating}>{movie.vote_average}</span>
        </div>
        <div className={styles.movieGenresContainer}>
          <MovieGenres genres={movie.genres} />
        </div>
        <div className={styles.detailsYearAndTime}>
          <span>{movie.release_date.slice(0, 4)}</span>

          <span>{minutesToHMText(movie.runtime)}</span>
        </div>
        <div className={styles.detailsDescription}>
          <span>{movie.overview}</span>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export const movieLoader: LoaderFunction = async ({
  params,
  request,
}: LoaderFunctionArgs) => {
  const movieId = params.movieId as string;
  if (movieId) {
    return await getMovie(movieId, request.signal);
  }
};

export default MovieDetails;
