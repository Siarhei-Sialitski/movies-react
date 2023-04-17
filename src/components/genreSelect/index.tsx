import classNames from "classnames";
import { GenreSelectProps } from "./types";
import React from 'react';
import useStyles from './styles';

const GenreSelect: React.FC<GenreSelectProps> = ({
  genreNames,
  selectedGenre,
  onSelect,
}) => {
  const styles = useStyles();

  const genreItems = genreNames.map((genre) => {
    const btnClass = classNames(styles.genreButton, {
      [styles.genreButtonSelected]: genre === selectedGenre,
    });

    return (
      <button key={genre} className={btnClass} onClick={() => onSelect(genre)}>
        {genre}
      </button>
    );
  });

  return <div className={styles.genreDiv}>{genreItems}</div>;
};

export default GenreSelect;
