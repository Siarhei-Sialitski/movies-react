import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import DeleteMovieForm from './index';

const meta = {
  title: 'Design System/Molecules/Delete Movie Form',
  component: DeleteMovieForm,
  argTypes: { onConfirm: { action: 'Confirm' } },
} as ComponentMeta<typeof DeleteMovieForm>;

type Story = ComponentStoryObj<typeof DeleteMovieForm>;

export const DeleteMovie: Story = {};

DeleteMovie.args = {};

export default meta;
