import { IMovieTileProps } from './types';
import React from 'react';
import MovieGenres from '../movieGenres';
import useStyles from './styles';
import TileMenu from '../tileMenu';

const MovieTile: React.FC<IMovieTileProps> = ({
  movie,
  onClick,
  onEdit,
  onDelete,
}) => {
  const styles = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (movie.id) onClick(movie.id);
  };

  return (
    <div
      onClick={handleClick}
      data-testid='movietilerootcontainer'
      className={styles.rootContainer}
    >
      <div className={styles.menu}>
        <TileMenu
          onEdit={() => {
            if (movie.id) onEdit?.(movie.id);
          }}
          onDelete={() => {
            if (movie.id) onDelete?.(movie.id);
          }}
        />
      </div>
      <img className={styles.image} src={movie.poster_path} alt={movie.title} />
      <div className={styles.tileContainer}>
        <div className={styles.divTileMovieName}>
          <span className={styles.tileMovieName} data-testid='movie-tile-title'>
            {movie.title}
          </span>
        </div>
        <div className={styles.divTileReleaseYear}>
          <span className={styles.spanTileReleaseYear}>
            {movie.release_date.slice(0, 4)}
          </span>
        </div>
        <div className={styles.genres}>
          <MovieGenres genres={movie.genres} />
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
