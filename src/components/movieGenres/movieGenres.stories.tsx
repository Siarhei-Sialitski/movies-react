import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieGenres from './index';

export default {
  title: 'Design System/Atoms/Movie Genres',
  component: MovieGenres,
} as ComponentMeta<typeof MovieGenres>;

const Template: ComponentStory<typeof MovieGenres> = (args) => (
  <MovieGenres {...args} />
);

export const SeveralGenres = Template.bind({});

SeveralGenres.args = {
  genres: ['Drama', 'Biography', 'Music'],
};

export const OneGenre = Template.bind({});

OneGenre.args = {
  genres: ['Drama'],
};
