import { useEffect, useState } from 'react';
import { allGenre, moviesApiBaseUrl } from '../shared/constants';
import { IMovie } from '../shared/types';

const useMovies = (
  searchQuery: string | undefined,
  activeGenre: string | undefined,
  sortBy: string
) => {
  const [responseData, setResponseData] = useState<IMovie[]>([]);

  useEffect(() => {
    let filter = '';
    if (activeGenre !== allGenre) {
      filter = `&filter=${activeGenre}`;
    }

    let search = '';
    if (searchQuery !== '') {
      search = `&search=${searchQuery}&searchBy=title`;
    }

    let sortByQueryParam = '';
    if (sortBy === 'Release Date') {
      sortByQueryParam = `&sortBy=release_date&sortOrder=asc`;
    } else {
      sortByQueryParam = `&sortBy=${sortBy.toLowerCase()}&sortOrder=asc`;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const dataFetch = async () => {
      try {
        setResponseData([]);
        const response = await fetch(
          `${moviesApiBaseUrl}?&${search}${filter}${sortByQueryParam}`,
          { signal }
        );
        const data = await response.json();
        setResponseData(data.data);
      } catch (ex: any) {
        if (ex && ex.name === 'AbortError') {
          console.log(ex.message);
        }
      }
    };

    dataFetch();

    return () => {
      controller.abort();
    };
  }, [searchQuery, activeGenre, sortBy]);

  return responseData;
};

export default useMovies;
