import { allGenre, moviesApiBaseUrl } from './constants';
import { IGetMoviesResponse, IMovie } from './types';

const request = async <TResponse>(
  url: string,
  config: RequestInit
): Promise<TResponse> => {
  const response = await fetch(url, config);
  if (!response.ok) {
    throw new Error('Internal Error');
  }
  return await response.json();
};

export const getMovie = async (movieId: string, signal: AbortSignal) => {
  const dataFetch = async () => {
    return await request<IMovie>(`${moviesApiBaseUrl}/${movieId}`, {
      signal,
    });
  };

  return await dataFetch();
};

export const getMovies = async (
  search: string,
  filter: string,
  sortBy: string,
  signal: AbortSignal
) => {
  let filterQueryParam = '';
  if (filter !== allGenre) {
    filterQueryParam = `&filter=${filter}`;
  }

  let searchQueryParam = '';
  if (search !== '') {
    searchQueryParam = `&search=${search}&searchBy=title`;
  }

  let sortByQueryParam = '';
  if (sortBy === 'Release Date') {
    sortByQueryParam = `&sortBy=release_date&sortOrder=asc`;
  } else {
    sortByQueryParam = `&sortBy=${sortBy.toLowerCase()}&sortOrder=asc`;
  }

  const dataFetch = async () => {
    return await request<IGetMoviesResponse>(
      `${moviesApiBaseUrl}?&${searchQueryParam}${filterQueryParam}${sortByQueryParam}`,
      { signal }
    );
  };

  return await dataFetch();
};

export const createMovie = async (movie: IMovie) => {
  const dataFetch = async () => {
    return await request<IMovie>(`${moviesApiBaseUrl}`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return await dataFetch();
};

export const updateMovie = async (movie: IMovie) => {
  const dataFetch = async () => {
    return await request<IMovie>(`${moviesApiBaseUrl}`, {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return await dataFetch();
};
