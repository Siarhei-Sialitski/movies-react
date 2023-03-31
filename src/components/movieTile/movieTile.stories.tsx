import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieTile from './index';

export default {
  title: 'Movie Tile',
  component: MovieTile,
} as ComponentMeta<typeof MovieTile>;

const Template: ComponentStory<typeof MovieTile> = (args) => (
  <MovieTile {...args} />
);

export const BohemianRhapsodyMovieTile = Template.bind({});

BohemianRhapsodyMovieTile.args = {
  imageUrl: '/images/Bohemian Rhapsody.png',
  movieName: 'Bohemian Rhapsody',
  onClick: (name): void => console.log(name),
  genres: ['Drama', 'Biography', 'Music'],
  releaseYear: '2003',
};
