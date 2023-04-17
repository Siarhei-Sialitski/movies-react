import React from 'react';
import { MovieGenresProps } from './types';
import useStyles from './styles';

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
  const styles = useStyles();

  const genresList = genres.map((genre, i) => (
    <span key={genre}>
      {genre}
      {i !== genres.length - 1 && ', '}
    </span>
  ));

  return (
    <div className={styles.genres} data-testid='moviegenres'>
      {genresList}
    </div>
  );
};

export default MovieGenres;
