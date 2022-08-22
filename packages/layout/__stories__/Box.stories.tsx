import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Box, BoxProps } from '../src';

export default {
  title: '@vx-ui/Layout/Box',
  component: Box,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Box>;

export const Default = {
  render: (args: BoxProps) => (
    <Box bg='red500' color='black' p='md' {...args}>
      Hello Component Library.
    </Box>
  ),
};
