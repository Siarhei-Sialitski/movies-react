/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeleteMovieForm from './index';

export default {
  title: 'Design System/Molecules/Delete Movie Form',
  component: DeleteMovieForm,
  argTypes: { onConfirm: { action: 'confirmed' } },
} as ComponentMeta<typeof DeleteMovieForm>;

const Template: ComponentStory<typeof DeleteMovieForm> = (args) => (
  <DeleteMovieForm {...args} />
);

export const DeleteMovie = Template.bind({});

DeleteMovie.args = {};
