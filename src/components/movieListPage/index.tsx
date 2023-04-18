/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import useMovies from '../../hooks/useData';
import { genres, sortCriterias } from '../../shared/constants';
import GenreSelect from '../genreSelect';
import MovieDetails from '../movieDetails';
import MovieTile from '../movieTile';
import Search from '../search';
import SortControl from '../sortControl';
import useStyles from './styles';
import { Search28Regular } from '@fluentui/react-icons';
import { Button } from '@fluentui/react-components';
import { IMovie } from '../../shared/types';

const MovieListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState(sortCriterias[0]);
  const [activeGenre, setActiveGenre] = useState(genres[0]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | undefined>(
    undefined
  );

  const styles = useStyles();

  const movies = useMovies(searchQuery, activeGenre, sortCriteria);

  const tiles = movies.map((movie) => {
    return (
      <div className={styles.tileContainer} key={movie.id}>
        <MovieTile
          movie={movie}
          onClick={(id) => {
            setSelectedMovie(movies.find((m) => m.id === id));
          }}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    );
  });

  return (
    <div className={styles.rootContainer}>
      {selectedMovie ? (
        <div className={styles.detailsContainer}>
          <Button
            icon={<Search28Regular />}
            className={styles.searchIcon}
            onClick={() => {
              setSelectedMovie(undefined);
            }}
            data-testid='searchicon'
          />
          <MovieDetails movie={selectedMovie} />
        </div>
      ) : (
        <div className={styles.searchContainer}>
          <Search
            initialValue={searchQuery}
            onSearch={(searchValue) => {
              setSearchQuery(searchValue);
            }}
          />
        </div>
      )}

      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <GenreSelect
            genreNames={genres}
            selectedGenre={activeGenre}
            onSelect={(selectedGenre) => {
              setActiveGenre(selectedGenre);
            }}
          />
          <div className={styles.sortContainer}>
            <SortControl
              currentSelection={sortCriteria}
              onSelectionChanged={(selection) => setSortCriteria(selection)}
            />
          </div>
        </div>
        <div className={styles.contentBody}>{tiles}</div>
      </div>
    </div>
  );
};

export default MovieListPage;