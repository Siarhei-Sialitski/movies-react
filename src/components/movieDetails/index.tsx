import React from 'react';
import MovieGenres from '../movieGenres';
import useStyles from './styles';
import { IMovieDetailsProps } from './types';

const MovieDetails: React.FC<IMovieDetailsProps> = ({
  movieName,
  releaseYear,
  imageUrl,
  rating,
  genres,
  duration,
  description,
}) => {
  const styles = useStyles();

  const durationToHM = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`;
  };
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.image} src={imageUrl} alt={movieName} />
        <div className={styles.content}>
          <div className={styles.movieName}>
            <span className={styles.movieName}>{movieName}</span>
          </div>
          <div className={styles.rating}>
            <span className={styles.detailsRating}>{rating}</span>
          </div>
          <MovieGenres genres={genres} />
          <div className={styles.detailsYearAndTime}>
            <span className={styles.releaseYear}>{releaseYear}</span>
            <span className={styles.duration}>{durationToHM(duration)}</span>
          </div>
          <div className={styles.detailsDescription}>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
