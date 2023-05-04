/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { allGenre, genres, sortCriterias } from '../../shared/constants';
import GenreSelect from '../genreSelect';
import MovieTile from '../movieTile';
import SortControl from '../sortControl';
import useStyles from './styles';
import { Search48Regular } from '@fluentui/react-icons';
import { Button } from '@fluentui/react-components';
import {
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { getMovies } from '../../shared/api';
import { IGetMoviesResponse } from '../../shared/types';

const MovieListPage: React.FC = () => {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const styles = useStyles();

  const { data } = useLoaderData() as IGetMoviesResponse;
  const tiles = data.map((movie) => {
    return (
      <div className={styles.tileContainer} key={movie.id}>
        <MovieTile
          movie={movie}
          onClick={(id) => {
            if (!movieId) {
              navigate({ pathname: `${id}`, search: searchParams.toString() });
            } else if (+movieId !== id)
              navigate({ pathname: `${id}`, search: searchParams.toString() });
          }}
          onEdit={(id) => {
            navigate({
              pathname: `${id}/edit`,
              search: searchParams.toString(),
            });
          }}
          onDelete={() => {}}
        />
      </div>
    );
  });

  const handleGenreSelect = (selectedGenre: string) => {
    if (selectedGenre === 'All') {
      if (searchParams.get('genre')) {
        searchParams.delete('genre');
        setSearchParams(searchParams);
      }
    } else {
      if (searchParams.get('genre') !== selectedGenre) {
        searchParams.set('genre', selectedGenre);
        setSearchParams(searchParams);
      }
    }
  };

  const handleSortingSelect = (selection: string) => {
    if (searchParams.get('sortBy') !== selection) {
      searchParams.set('sortBy', selection);
      setSearchParams(searchParams);
    }
  };
  const headerClass = movieId
    ? styles.detailsContainer
    : styles.searchContainer;
  return (
    <div className={styles.rootContainer} data-testid='movielistpage'>
      <div className={headerClass}>
        {movieId && (
          <Button
            icon={<Search48Regular />}
            className={styles.searchIcon}
            onClick={() => {
              navigate({ pathname: `/`, search: searchParams.toString() });
            }}
            data-testid='searchicon'
          />
        )}
        <Outlet />
        <div id='portal-root' />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <GenreSelect
            genreNames={genres}
            selectedGenre={searchParams.get('genre') ?? allGenre}
            onSelect={handleGenreSelect}
          />
          <div className={styles.sortContainer}>
            <SortControl
              currentSelection={searchParams.get('sortBy') ?? sortCriterias[0]}
              onSelectionChanged={handleSortingSelect}
            />
          </div>
        </div>
        <div className={styles.contentBody}>{tiles}</div>
      </div>
    </div>
  );
};

export const moviesLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  return await getMovies(
    url.searchParams.get('query') ?? '',
    url.searchParams.get('genre') ?? allGenre,
    url.searchParams.get('sortBy') ?? sortCriterias[0],
    request.signal
  );
};

export default MovieListPage;
