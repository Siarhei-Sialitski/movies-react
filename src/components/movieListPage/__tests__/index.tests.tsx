import { enableFetchMocks } from 'jest-fetch-mock';

import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import MovieListPage from '..';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
enableFetchMocks();

const movies = [
  {
    id: 1,
    title: 'Fifty Shades Freed',
    vote_average: 6.1,
    release_date: '2018-02-07',
    poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
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
    poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    genres: ['Criminal', 'Romance'],
    runtime: 200,
  },
];

const loaderReponse = {
  data: movies,
};

const setup = () => {
  const routes = [
    {
      path: '/',
      element: <MovieListPage />,
      loader: () => loaderReponse,
    },
  ];

  userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });
  render(<RouterProvider router={router} />);
};

describe('MovieListPage', () => {
  it('should render', (done) => {
    setup();

    done();
  });

  it('should render all movies', async () => {
    setup();

    await waitFor(() =>
      movies.map((m) => expect(screen.getByText(m.title)).toBeInTheDocument())
    );
  });

  it('should not render movie details after render', async () => {
    setup();

    expect(screen.queryByTestId('searchicon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('moviedetailsrootcontainer')).not.toBeInTheDocument();
  });
});
