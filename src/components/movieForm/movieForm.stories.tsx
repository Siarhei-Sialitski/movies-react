import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieForm from './index';
import { IMovie } from '../../shared/types';

export default {
  title: 'Design System/Organisms/Movie Form',
  component: MovieForm,
  argTypes: {
    onSubmit: { action: 'Submit' },
  },
} as ComponentMeta<typeof MovieForm>;

const Template: ComponentStory<typeof MovieForm> = (args) => (
  <MovieForm {...args} />
);

export const EmptyMovieForm = Template.bind({});

EmptyMovieForm.args = {};

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

export const FilledMovieForm = Template.bind({});

FilledMovieForm.args = {
  initialMovieInfo: initialMovie,
};