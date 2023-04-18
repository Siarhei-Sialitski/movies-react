import React from 'react';
import { minutesToHMText } from '../../utils/dateTimeUtils';
import MovieGenres from '../movieGenres';
import useStyles from './styles';
import { IMovieDetailsProps } from './types';

const MovieDetails: React.FC<IMovieDetailsProps> = ({ movie }) => {
  const styles = useStyles();

  return (
    <div className={styles.container} data-testid='moviedetailsrootcontainer'>
      <img className={styles.image} src={movie.poster_path} alt={movie.title} />
      <div className={styles.content}>
        <div className={styles.movieName}>
          <span className={styles.movieName}>{movie.title}</span>
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
    </div>
  );
};

export default MovieDetails;
