import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import MovieListPage from './index';

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

const loaderReponse = {
  data: movies,
};

const meta = {
  title: 'Design System/Pages/Movie List',
  component: MovieListPage,
  decorators: [
    (Story) => (
      <RouterProvider
        router={createMemoryRouter(
          [
            {
              path: '/',
              element: <Story />,
              loader: () => loaderReponse,
            },
          ],
          {
            initialEntries: ['/'],
          }
        )}
      />
    ),
  ],
} as ComponentMeta<typeof MovieListPage>;
export default meta;

type Story = ComponentStoryObj<typeof MovieListPage>;

export const DefaulyMovieListPage: Story = {};
