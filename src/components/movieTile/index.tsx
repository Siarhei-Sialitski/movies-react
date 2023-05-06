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
    <div
      onClick={handleClick}
      data-testid='movietilerootcontainer'
      className='w-80'
    >
      <div className='relative top-14 left-64'>
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
        className='w-80 h-[32rem] float-left z-0'
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className='relative top-2.5 w-80'>
        <div className='float-left'>
          <span
            className='w-56 h-5 text-lg text-white opacity-70 mix-blend-normal'
            data-testid='movie-tile-title'
          >
            {movie.title}
          </span>
        </div>
        <div className='box-border w-16 h-6 mix-blend-normal opacity-50 float-right text-center flex items-center justify-center rounded border border-solid border-gray-300'>
          <span className='text-white opacity-70 mix-blend-normal text-center font-sm w-12 h-4 leading-4'>
            {movie.release_date.slice(0, 4)}
          </span>
        </div>
        <div className='float-left'>
          <MovieGenres genres={movie.genres} />
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
