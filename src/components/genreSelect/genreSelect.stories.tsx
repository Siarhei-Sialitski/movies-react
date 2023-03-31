/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import GenreSelect from './index';

export default {
  title: 'Genre Select',
  component: GenreSelect,
  args: {
    onSelect: () => {},
  },
} as ComponentMeta<typeof GenreSelect>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof GenreSelect> = (args) => (
  <GenreSelect {...args} />
);

export const FiveGenres = Template.bind({});

FiveGenres.args = {
  genreNames: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
  selectedGenre: 'Comedy',
};
