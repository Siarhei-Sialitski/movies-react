import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieTile from './index';

export default {
  title: 'Design System/Organisms/Movie Tile',
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
  movie: {
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
  },
};
