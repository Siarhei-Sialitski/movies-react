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
    <div className="h-4 w-80 text-sm leading-4 text-white" data-testid="moviegenres">
      {genresList}
    </div>
  );
};

export default MovieGenres;
