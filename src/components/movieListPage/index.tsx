/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { genres, sortCriterias } from '../../shared/constants';
import GenreSelect from '../genreSelect';
import MovieTile from '../movieTile';
import SortControl from '../sortControl';
import useStyles from './styles';
import { Search28Regular } from '@fluentui/react-icons';
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
import { IMovieListPageData } from './types';

const MovieListPage: React.FC = () => {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const styles = useStyles();

  const { data } = useLoaderData() as IMovieListPageData;
  const tiles = data.map((movie) => {
    return (
      <div className={styles.tileContainer} key={movie.id}>
        <MovieTile
          movie={movie}
          onClick={(id) => {
            navigate({ pathname: `${id}`, search: searchParams.toString() });
          }}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    );
  });

  const handleGenreSelect = (selectedGenre: string) => {
    selectedGenre !== 'All'
      ? searchParams.set('genre', selectedGenre)
      : searchParams.delete('genre');
    setSearchParams(searchParams);
  };

  const handleSortingSelect = (selection: string) => {
    searchParams.set('sortBy', selection);
    setSearchParams(searchParams);
  };
  const headerClass = movieId
    ? styles.detailsContainer
    : styles.searchContainer;
  return (
    <div className={styles.rootContainer} data-testid='movielistpage'>
      <div className={headerClass}>
        {movieId && (
          <Button
            icon={<Search28Regular />}
            className={styles.searchIcon}
            onClick={() => {
              navigate({ pathname: `/`, search: searchParams.toString() });
            }}
            data-testid='searchicon'
          />
        )}
        <Outlet />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contentHeader}>
          <GenreSelect
            genreNames={genres}
            selectedGenre={searchParams.get('genre') ?? genres[0]}
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
    url.searchParams.get('genre') ?? genres[0],
    url.searchParams.get('sortBy') ?? sortCriterias[0],
    request.signal
  );
};

export default MovieListPage;
