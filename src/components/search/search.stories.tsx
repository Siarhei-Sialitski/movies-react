import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Search from './index';

export default {
  title: 'Design System/Molecules/Search',
  component: Search,
  argTypes: { onSearch: { action: 'search' } },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['?query=test']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const SearchWithInput = Template.bind({});

SearchWithInput.args = {};
