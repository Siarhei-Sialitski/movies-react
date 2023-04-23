import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import MovieForm from './index';
import { IMovie } from '../../shared/types';

const meta = {
  title: 'Design System/Organisms/Movie Form',
  component: MovieForm,
  argTypes: {
    onSubmit: { action: 'Submit' },
  },
} as ComponentMeta<typeof MovieForm>;
export default meta;

type Story = ComponentStoryObj<typeof MovieForm>;

export const EmptyMovieForm: Story = {};

const initialMovie: IMovie = {
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

export const FilledMovieForm: Story = {
  args: {
    initialMovieInfo: initialMovie,
  },
};
