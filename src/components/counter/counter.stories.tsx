import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from './index';

export default {
  title: 'Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const WithTenInitialValue = Template.bind({});

WithTenInitialValue.args = {
  initialValue: 10,
};
