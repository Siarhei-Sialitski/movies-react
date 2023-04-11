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
  movieId: '1',
  title: 'Moana',
  releaseDate: '2018-07-22',
  url: 'https://www.moana.com',
  rating: 7.6,
  duration: 107,
  description: `Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.`,
  genres: ['Crime', 'Horror'],
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