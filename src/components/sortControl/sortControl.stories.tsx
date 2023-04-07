import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortControl from './index';

export default {
  title: 'Design System/Molecules/Sort Control',
  component: SortControl,
  argTypes: { onSelectionChanged: { action: 'selectionChanged' } },
} as ComponentMeta<typeof SortControl>;

const Template: ComponentStory<typeof SortControl> = (args) => (
  <SortControl {...args} />
);

export const DefaultSortControl = Template.bind({});

DefaultSortControl.args = {
  currentSelection: 'Release Date',
};
