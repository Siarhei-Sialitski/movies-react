import React from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import MovieListPage from './index';

const meta = {
  title: 'Design System/Pages/Movie List',
  component: MovieListPage,
} as ComponentMeta<typeof MovieListPage>;
export default meta;

type Story = ComponentStoryObj<typeof MovieListPage>;

export const DefaulyMovieListPage: Story = {};
