import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import useData from '../useData';
import fetchMock from 'jest-fetch-mock';
import { renderHook, waitFor } from '@testing-library/react';

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

describe('useData', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify({ data: movies }));
  });

  it('should return fetch data response', async () => {
    const { result } = await renderHook(() => useData('', '', 'Title'));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(result.current).toEqual(movies);
    });
  });

  it('should not contain filter if "all" passed', () => {
    renderHook(() => useData('', 'All', 'Title'));

    expect(fetchMock).toHaveBeenCalledWith(
      expect.not.stringContaining('filter'),
      expect.anything()
    );
  });

  it('should contain filter param with genre if genre passed', () => {
    const genre = 'Comedy';
    renderHook(() => useData('', genre, 'Title'));

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('filter'),
      expect.anything()
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(genre),
      expect.anything()
    );
  });

  it('should not contain search param if search query not passed', () => {
    renderHook(() => useData('', '', 'Title'));

    expect(fetchMock).toHaveBeenCalledWith(
      expect.not.stringContaining('search'),
      expect.anything()
    );
    expect(fetchMock).toHaveBeenCalledWith(
      expect.not.stringContaining('searchBy'),
      expect.anything()
    );
  });

  it('should contain search param if search query passed', () => {
    const searchQuery = 'The';
    renderHook(() => useData(searchQuery, '', 'Title'));

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

  it('should contain sort by title param if sort title passed', () => {
    renderHook(() => useData('', '', 'Title'));

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('sortBy=title&sortOrder=asc'),
      expect.anything()
    );
  });

  it('should contain sort by release_date param if sort by release date passed', () => {
    renderHook(() => useData('', '', 'Release Date'));

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('sortBy=release_date&sortOrder=asc'),
      expect.anything()
    );
  });

  it('should return empty array if rejected', async () => {
    fetchMock.resetMocks();
    fetchMock.mockRejectOnce();

    const { result } = renderHook(() => useData('', '', 'Release Date'));

    await waitFor(() => {
      expect(result.current.length).toEqual(0);
    });
  });
});
