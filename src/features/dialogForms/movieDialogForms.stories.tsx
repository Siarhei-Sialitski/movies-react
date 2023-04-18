import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Dialog from '../../components/dialog';
import { IMovie } from '../../shared/types';
import MovieForm from '../../components/movieForm';
import DeleteMovieForm from '../../components/deleteMovieForm';
import { action } from '@storybook/addon-actions';

const actions = {
  onFormSubmit: { action: 'Form submit' },
  onClose: { action: 'Close' },
  onSubmit: { action: 'OnSubmit' },
  onConfirm: { action: 'Confirm' },
};
const meta = {
  title: 'Design System/Features/Movie Dialogs',
  component: Dialog,
  argTypes: actions,
} as ComponentMeta<typeof Dialog>;

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

type Story = ComponentStoryObj<typeof Dialog>;

export const Primary: Story = {
  args: {
    title: 'Card Title',
  },
};

export const AddMovieDialog: Story = {
  args: {
    title: 'Add movie',
    children: <MovieForm onSubmit={action(actions.onSubmit.action)} />,
  },
};

export const EditMovieDialog: Story = {
  args: {
    title: 'Edit movie',
    children: (
      <MovieForm
        onSubmit={action(actions.onSubmit.action)}
        initialMovieInfo={initialMovie}
      />
    ),
  },
};

export const DeleteMovieDialog: Story = {
  args: {
    title: 'Delete movie',
    children: <DeleteMovieForm onConfirm={action(actions.onConfirm.action)} />,
  },
};

export default meta;