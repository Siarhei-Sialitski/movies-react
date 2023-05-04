import classNames from "classnames";
import { GenreSelectProps } from "./types";
import React from 'react';
import useStyles from './styles';
import { allGenre } from '../../shared/constants';

const GenreSelect: React.FC<GenreSelectProps> = ({
  genreNames,
  selectedGenre,
  onSelect,
}) => {
  const styles = useStyles();

  const genres = [allGenre, ...genreNames];
  const genreItems = genres.map((genre) => {
    const isSelected = genre === selectedGenre;
    const btnClass = classNames(styles.genreButton, {
      [styles.genreButtonSelected]: isSelected,
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

  return <div className={styles.genreDiv}>{genreItems}</div>;
};

export default GenreSelect;
