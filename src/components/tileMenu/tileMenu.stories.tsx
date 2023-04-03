import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TileMenu from './index';

export default {
  title: 'Tile Menu',
  component: TileMenu,
} as ComponentMeta<typeof TileMenu>;

const Template: ComponentStory<typeof TileMenu> = (args) => (
  <TileMenu {...args} />
);

export const DefaultTileMenu = Template.bind({});

DefaultTileMenu.args = {};
