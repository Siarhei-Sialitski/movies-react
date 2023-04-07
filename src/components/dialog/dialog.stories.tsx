import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from '.';
import { Button } from '@fluentui/react-components';

export default {
  title: 'Design System/Molecules/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const ExampleDialog = Template.bind({});

ExampleDialog.args = {
  title: 'edit movie',
  children: <Button />,
};
