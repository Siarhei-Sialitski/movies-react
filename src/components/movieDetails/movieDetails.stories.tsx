import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import MovieDetails from './index';
import { IMovie } from '../../shared/types';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

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

const loaderReponse = {
  movie,
};

const meta = {
  title: 'Design System/Organisms/Movie Details',
  component: MovieDetails,
  decorators: [
    (Story) => (
      <RouterProvider
        router={createMemoryRouter(
          [
            {
              path: '/:movieId',
              element: <Story />,
              loader: () => loaderReponse,
            },
          ],
          {
            initialEntries: ['/11'],
          }
        )}
      />
    ),
  ],
} as ComponentMeta<typeof MovieDetails>;
export default meta;

type Story = ComponentStoryObj<typeof MovieDetails>;

export const FiftyShadesFreed: Story = {};
