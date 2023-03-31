import { IMovieTileProps } from './types';
import React from 'react';
import MovieGenres from '../movieGenres';
import useStyles from './styles';
import TileMenu from '../tileMenu';

const MovieTile: React.FC<IMovieTileProps> = ({
  movieId,
  movieName,
  imageUrl,
  genres,
  releaseYear,
  onClick,
  onEdit,
  onDelete,
}) => {
  const styles = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick(movieId);
  };

  return (
    <div onClick={handleClick} data-testid='container'>
      <img className={styles.image} src={imageUrl} alt={movieName} />
      <div className={styles.tileContainer}>
        <div className={styles.divTileMovieName}>
          <span className={styles.tileMovieName}>{movieName}</span>
        </div>
        <div className={styles.divTileReleaseYear}>
          <span className={styles.spanTileReleaseYear}>{releaseYear}</span>
        </div>
        <div className={styles.genres}>
          <MovieGenres genres={genres} />
        </div>
      </div>
      <div className={styles.menu}>
        <TileMenu
          onEdit={() => onEdit?.(movieId)}
          onDelete={() => onDelete?.(movieId)}
        />
      </div>
    </div>
  );
};

export default MovieTile;
