import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieTile from './index';

export default {
  title: 'Movie Tile',
  component: MovieTile,
  argTypes: {
    onClick: { action: 'clicked' },
    onDelete: { action: 'deleted' },
    onEdit: { action: 'edited' },
  },
} as ComponentMeta<typeof MovieTile>;

const Template: ComponentStory<typeof MovieTile> = (args) => (
  <MovieTile {...args} />
);

export const BohemianRhapsodyMovieTile = Template.bind({});

BohemianRhapsodyMovieTile.args = {
  movieId: '1',
  imageUrl: '/images/Bohemian Rhapsody.png',
  movieName: 'Bohemian Rhapsody',
  genres: ['Drama', 'Biography', 'Music'],
  releaseYear: '2003',
};
