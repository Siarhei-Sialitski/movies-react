import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from './index';

export default {
  title: 'Search',
  component: Search,
  argTypes: { onSearch: { action: 'search' } },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const SearchWithPlaceholder = Template.bind({});

SearchWithPlaceholder.args = {};

export const SearchWithInput = Template.bind({});

SearchWithInput.args = { initialValue: 'Kill Bill' };
