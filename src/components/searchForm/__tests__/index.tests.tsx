import { enableFetchMocks } from 'jest-fetch-mock';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import SearchForm from '..';
enableFetchMocks();

const dialogMock = 'Add Movie Mock';
const setup = () => {
  const routes = [
    {
      path: '/new',
      element: <div>{dialogMock}</div>,
    },
    {
      path: '/',
      element: <SearchForm />,
    },
  ];

  userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });
  render(<RouterProvider router={router} />);
};

describe('Add Movie Form', () => {
  it('should render add movie form', () => {
    setup();
    expect(screen.getByText('+ add movie')).toBeInTheDocument();
  });

  it('should navigate to /new route when add movie button clicked', async () => {
    setup();

    await userEvent.click(screen.getByText('+ add movie'));
    expect(screen.queryByText(dialogMock)).toBeInTheDocument();
  });
});
