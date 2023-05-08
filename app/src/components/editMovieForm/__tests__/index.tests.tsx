import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import EditMovieForm from '..';
import { IMovie } from '../../../shared/types';

const movie: IMovie = {
  id: 337167,
  title: 'Fifty Shades Freed',
  vote_average: 6.1,
  release_date: '2018-02-07',
  poster_path:
    'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview:
    'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
  genres: ['Drama', 'Romance'],
  runtime: 106,
};

const setup = () => {
  const routes = [
    {
      path: '/:movieId/edit',
      element: <EditMovieForm />,
      loader: () => movie,
    },
    {
      path: '/',
      element: <div />,
    },
  ];

  userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', { pathname: '/1/edit', state: { from: '/' } }],
    initialIndex: 1,
  });
  render(<RouterProvider router={router} />);
};

describe('Edit Movie Form', () => {
  it('should render edit movie form', async () => {
    setup();
    await waitFor(() =>
      expect(screen.getByText('Edit Movie')).toBeInTheDocument()
    );
  });

  it('should not render dialog after close click', async () => {
    setup();
    await waitFor(
      async () => await userEvent.click(screen.getByTestId('dismissButton'))
    );
    expect(screen.queryByText('Edit Movie')).not.toBeInTheDocument();
  });
});
