import { IMovieTileProps } from './types';
import React from 'react';
import MovieGenres from '../movieGenres';
import TileMenu from '../tileMenu';

const MovieTile: React.FC<IMovieTileProps> = ({
  movie,
  onClick,
  onEdit,
  onDelete,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (movie.id) onClick(movie.id);
  };

  return (
    <div onClick={handleClick} data-testid="movietilerootcontainer" className="w-80">
      <div className="relative left-64 top-14">
        <TileMenu
          onEdit={() => {
            if (movie.id) onEdit?.(movie.id);
          }}
          onDelete={() => {
            if (movie.id) onDelete?.(movie.id);
          }}
        />
      </div>
      <img
        className="z-0 float-left h-[32rem] w-80"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className="relative top-2.5 w-80">
        <div className="float-left">
          <span
            className="h-5 w-56 text-lg text-white opacity-70 mix-blend-normal"
            data-testid="movie-tile-title"
          >
            {movie.title}
          </span>
        </div>
        <div className="float-right box-border flex h-6 w-16 items-center justify-center rounded border border-solid border-gray-300 text-center opacity-50 mix-blend-normal">
          <span className="h-4 w-12 text-center leading-4 text-white opacity-70 mix-blend-normal">
            {movie.release_date.slice(0, 4)}
          </span>
        </div>
        <div className="float-left">
          <MovieGenres genres={movie.genres} />
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
