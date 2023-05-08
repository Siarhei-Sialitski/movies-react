import { ComponentStory, ComponentMeta } from '@storybook/react';
import GenreSelect from './index';

export default {
  title: 'Design System/Atoms/Genre Select',
  component: GenreSelect,
  argTypes: {
    onSelect: {
      action: 'select',
    },
  },
} as ComponentMeta<typeof GenreSelect>;

const Template: ComponentStory<typeof GenreSelect> = (args) => (
  <GenreSelect {...args} />
);

export const FiveGenres = Template.bind({});

FiveGenres.args = {
  genreNames: ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'],
  selectedGenre: 'Comedy',
};
