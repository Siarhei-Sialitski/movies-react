import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortControl from './index';

export default {
  title: 'Sort Control',
  component: SortControl,
} as ComponentMeta<typeof SortControl>;

const Template: ComponentStory<typeof SortControl> = (args) => (
  <SortControl {...args} />
);

export const DefaultSortControl = Template.bind({});

DefaultSortControl.args = {
  currentSelection: 'Release Date',
  onSelectionChanged: (selection): void => console.log(selection),
};
