import { ComponentMeta } from '@storybook/react';
import * as React from 'react';
import { Box, Flex, FlexBaseProps, Spacer } from '../src';

export default {
  title: '@vx-ui/Layout/Flex',
  component: Flex,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

export const Default = {
  render: (args: FlexBaseProps) => (
    <Flex justify='space-between' color='white' {...args}>
      <Box size='100px' bg='green500'>
        Box 1
      </Box>
      <Box size='100px' bg='blue500'>
        Box 2
      </Box>
      <Box basis='300px' size='100px' bg='cyan500'>
        Box 3
      </Box>
    </Flex>
  ),
};

export const FlexSpacer = {
  render: (args: FlexBaseProps) => (
    <Flex h='80vh' color='white' {...args}>
      <Box size='100px' p='md' bg='red400'>
        Box 1
      </Box>
      <Spacer />
      <Box size='100px' p='md' bg='green400'>
        Box 2
      </Box>
    </Flex>
  ),
};
