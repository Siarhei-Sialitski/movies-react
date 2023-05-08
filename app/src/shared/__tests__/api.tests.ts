import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { getMovie, getMovies } from '../api';
import fetchMock from 'jest-fetch-mock';

const movies = [
  {
    id: 1,
    title: 'Fifty Shades Freed',
    vote_average: 6.1,
    release_date: '2018-02-07',
    poster_path:
      'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    genres: ['Drama', 'Romance'],
    runtime: 106,
  },
  {
    id: 2,
    title: 'Kill Bill',
    vote_average: 8.1,
    release_date: '2018-02-07',
    poster_path:
      'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    genres: ['Criminal', 'Romance'],
    runtime: 200,
  },
];

const setupGetMovies = (search: string, filter: string, sortBy: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const getMoviesFunc = async () =>
    await getMovies(search, filter, sortBy, signal);
  return {
    getMovies: getMoviesFunc,
  };
};

const setupGetMovie = (movieId: string) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const getMovieFunc = async () => await getMovie(movieId, signal);
  return {
    getMovie: getMovieFunc,
    controller,
  };
};

describe('getMovies', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify({ data: movies }));
  });

  it('should return fetch data response', async () => {
    const { getMovies } = setupGetMovies('', '', 'Title');
    const result = await getMovies();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ data: movies });
  });

  it('should not contain filter if "all" passed', async () => {
    const { getMovies } = setupGetMovies('', 'All', 'Title');
    await getMovies();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.not.stringContaining('filter'),
      expect.anything()
    );
  });

  it('should contain filter param with genre if genre passed', async () => {
    const genre = 'Comedy';
    const { getMovies } = setupGetMovies('', genre, 'Title');
    await getMovies();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('filter'),
      expect.anything()
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(genre),
      expect.anything()
    );
  });

  it('should not contain search param if search query not passed', async () => {
    const { getMovies } = setupGetMovies('', '', 'Title');
    await getMovies();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.not.stringContaining('search'),
      expect.anything()
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.not.stringContaining('searchBy'),
      expect.anything()
    );
  });

  it('should contain search param if search query passed', async () => {
    const searchQuery = 'The';
    const { getMovies } = setupGetMovies(searchQuery, '', 'Title');
    await getMovies();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('search'),
      expect.anything()
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(searchQuery),
      expect.anything()
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('searchBy=title'),
      expect.anything()
    );
  });

  it('should contain sort by title param if sort title passed', async () => {
    const { getMovies } = setupGetMovies('', '', 'Title');
    await getMovies();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('sortBy=title&sortOrder=asc'),
      expect.anything()
    );
  });

  it('should contain sort by release_date param if sort by release date passed', async () => {
    const { getMovies } = setupGetMovies('', '', 'Release Date');
    await getMovies();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('sortBy=release_date&sortOrder=asc'),
      expect.anything()
    );
  });

  describe('getMovie', () => {
    beforeEach(() => {
      fetchMock.resetMocks();
      fetchMock.mockResponseOnce(JSON.stringify(movies[0]));
    });

    it('should return fetch data response', async () => {
      const { getMovie } = setupGetMovie('1');
      const result = await getMovie();
      console.log(result);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(result).toEqual(movies[0]);
    });
  });
});