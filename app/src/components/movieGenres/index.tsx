import React from 'react';
import { MovieGenresProps } from './types';

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
  const genresList = genres.map((genre, i) => (
    <span key={genre}>
      {genre}
      {i !== genres.length - 1 && ', '}
    </span>
  ));

  return (
    <div
      className='text-white text-sm w-80 h-4 leading-4'
      data-testid='moviegenres'
    >
      {genresList}
    </div>
  );
};

export default MovieGenres;
