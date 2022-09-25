import { ComponentMeta } from '@storybook/react';
import * as React from 'react';
import {
  Box,
  Flex,
  FlexBaseProps,
  HStack,
  HStackProps,
  Spacer,
  Stack,
  StackProps,
  VStack,
  VStackProps,
} from '../src';
import { spacingOptions } from '@vx-ui/theme';

const spacingSelect = {
  name: 'spacing',
  type: { name: 'string', required: false },
  defaultValue: 'lg',
  description: 'The gap between stack items.',
  table: {
    type: { summary: 'string' },
    defaultValue: { summary: 'md' },
  },
  control: {
    type: 'select',
    ...spacingOptions(),
  },
};

const alignSelect = {
  name: 'align',
  type: { name: 'string', required: false },
  defaultValue: 'center',
  description: 'Shorthand for alignItems style prop',
  table: {
    type: { summary: 'string' },
    defaultValue: { summary: 'center' },
  },
  control: {
    type: 'select',
    options: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'baseline',
      'initial',
      'inherit',
    ],
  },
};

export default {
  title: '@vx-ui/Layout/Stack',
  component: Flex,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    direction: {
      name: 'direction',
      type: { name: 'string', required: false },
      defaultValue: 'row',
      description: 'Shorthand for flexDirection style prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'row' },
      },
      control: {
        type: 'select',
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
      },
    },
    spacing: spacingSelect,
    align: alignSelect,
  },
} as ComponentMeta<typeof Flex>;

export const DefaultStack = {
  render: (args: StackProps) => (
    <Stack {...args}>
      <Box p='md' bg='yellow200'>
        1
      </Box>
      <Box p='md' bg='tomato'>
        2
      </Box>
      <Box p='md' bg='blacks.4'>
        3
      </Box>
    </Stack>
  ),
};

export const horizontalStack = {
  render: (args: HStackProps) => (
    <HStack h='50vh' {...args}>
      <Box p='md' bg='yellow200'>
        1
      </Box>
      <Box p='md' bg='tomato'>
        2
      </Box>
      <Box p='md' bg='blacks.4'>
        3
      </Box>
    </HStack>
  ),
};

export const verticalStack = {
  render: (args: VStackProps) => (
    <VStack {...args}>
      <Box p='md' bg='yellow200'>
        1
      </Box>
      <Box p='md' bg='tomato'>
        2
      </Box>
      <Box p='md' bg='blacks.4'>
        3
      </Box>
    </VStack>
  ),
};
