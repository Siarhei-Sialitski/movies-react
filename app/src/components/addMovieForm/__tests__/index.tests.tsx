import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import AddMovieForm from '..';

const setup = () => {
  const routes = [
    {
      path: '/new',
      element: <AddMovieForm />,
    },
    {
      path: '/',
      element: <div />,
    },
  ];

  userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ['/', { pathname: '/new', state: { from: '/' } }],
    initialIndex: 1,
  });
  render(<RouterProvider router={router} />);
};

describe('Add Movie Form', () => {
  it('should render add movie form', () => {
    setup();
    expect(screen.getByText('Add Movie')).toBeInTheDocument();
  });

  it('should not render dialog after close click', async () => {
    setup();

    await userEvent.click(screen.getByTestId('dismissButton'));
    expect(screen.queryByText('Add Movie')).not.toBeInTheDocument();
  });
});
