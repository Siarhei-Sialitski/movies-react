import { allGenre, moviesApiBaseUrl } from './constants';

export const getMovie = async (movieId: string, signal: AbortSignal) => {
  const dataFetch = async () => {
    try {
      const response = await fetch(`${moviesApiBaseUrl}/${movieId}`, {
        signal,
      });
      if (!response.ok) {
        throw new Error('Internal Error');
      }
      const data = await response.json();
      return { movie: data };
    } catch (ex) {
      const error = ex as Error;
      if (error && error.name === 'AbortError') {
        console.log(error.message);
      }
      throw new Error('Internal Error');
    }
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
    try {
      const response = await fetch(
        `${moviesApiBaseUrl}?&${searchQueryParam}${filterQueryParam}${sortByQueryParam}`,
        { signal }
      );
      if (!response.ok) {
        throw new Error('Internal Error');
      }
      return await response.json();
    } catch (ex) {
      const error = ex as Error;
      if (error && error.name === 'AbortError') {
        console.log(error.message);
      }
      throw new Error('Internal Error');
    }
  };

  return await dataFetch();
};
