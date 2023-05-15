import classNames from "classnames";
import { GenreSelectProps } from "./types";
import React from 'react';
import { allGenre } from '../../shared/constants';

const GenreSelect: React.FC<GenreSelectProps> = ({
  genreNames,
  selectedGenre,
  onSelect,
}) => {
  const genres = [allGenre, ...genreNames];
  const genreItems = genres.map((genre) => {
    const isSelected = genre === selectedGenre;
    const btnClass = classNames('text-neutral-300 text-base font-montserrat', {
      'border-b-2 border-rose-500': isSelected,
    });
    const datatestid = isSelected ? 'activegenrebutton' : 'genrebutton';

    return (
      <button
        key={genre}
        className={btnClass}
        onClick={() => onSelect(genre)}
        data-testid={datatestid}
      >
        {genre}
      </button>
    );
  });

  return <div className="flex content-center space-x-4">{genreItems}</div>;
};

export default GenreSelect;
