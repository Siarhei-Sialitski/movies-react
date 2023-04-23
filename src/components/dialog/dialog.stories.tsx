import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Dialog from '.';
import { Button } from '@fluentui/react-components';

const meta = {
  title: 'Design System/Molecules/Dialog',
  component: Dialog,
  argTypes: {
    onClose: {
      action: 'Close',
    },
  },
} as ComponentMeta<typeof Dialog>;

type Story = ComponentStoryObj<typeof Dialog>;
export const ExampleDialog: Story = {
  args: {
    title: 'edit movie',
    children: <Button />,
  },
};

export default meta;
