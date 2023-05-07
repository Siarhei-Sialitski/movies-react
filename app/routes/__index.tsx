/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { allGenre, genres, sortCriterias } from '../src/shared/constants';
import GenreSelect from '../src/components/genreSelect';
import MovieTile from '../src/components/movieTile';
import SortControl from '../src/components/sortControl';
import {
  Outlet,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { getMovies } from '../src/shared/api';
import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

const MovieListPage: React.FC = () => {
  const { movieId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const data = useLoaderData<typeof loader>();
  const tiles = data.data.map((movie) => {
    return (
      <div className='flex-initial' key={movie.id}>
        <MovieTile
          movie={movie}
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
    ? ''
    : 'flex items-center justify-center h-96 bg-header';
  return (
    <div className='flex flex-col gap-5 p-5' data-testid='movielistpage'>
      <div className={headerClass}>
        {movieId && (
          <button
            type='submit'
            className='absolute top-5 right-5 p-2.5 text-sm font-medium text-rose-500'
            onClick={() => {
              navigate({ pathname: `/`, search: searchParams.toString() });
            }}
            data-testid='searchicon'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </button>
        )}
        <Outlet />
        <div id='portal-root' />
      </div>

      <div className='px-5'>
        <div className='flex flex-row justify-between'>
          <GenreSelect
            genreNames={genres}
            selectedGenre={searchParams.get('genre') ?? allGenre}
            onSelect={handleGenreSelect}
          />
          <div className='float-right'>
            <SortControl
              currentSelection={searchParams.get('sortBy') ?? sortCriterias[0]}
              onSelectionChanged={handleSortingSelect}
            />
          </div>
        </div>
        <div className='flex flex-wrap py-3 px-2 gap-x-16 gap-y-8'>{tiles}</div>
      </div>
    </div>
  );
};

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  return await getMovies(
    url.searchParams.get('query') ?? '',
    url.searchParams.get('genre') ?? allGenre,
    url.searchParams.get('sortBy') ?? sortCriterias[0],
    request.signal
  );
};

export default MovieListPage;