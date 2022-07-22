import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from '../src';
import { Stack } from '@vx-ui/layout';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '@vx-ui/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    p: {
      name: 'p',
      type: { name: 'string', required: false },
      defaultValue: 'md',
    },
    isActive: {
      name: 'isActive',
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
    s: {
      name: 's',
      type: { name: 'string', required: false },
      defaultValue: 'md',
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default = {
  render: (args: ButtonProps) => (
    <Stack direction='column' spacing='xl'>
      <Stack spacing='lg' align='center'>
        <Button colorScheme='cyan' s='xs'>
          Button
        </Button>
        <Button colorScheme='blue' s='sm'>
          Button
        </Button>
        <Button colorScheme='cyan' s='md'>
          Button
        </Button>
        <Button colorScheme='cyan' s='lg'>
          Button
        </Button>
      </Stack>
      <Stack spacing='lg' align='center'>
        <Button colorScheme='teal' variant='solid'>
          Button
        </Button>
        <Button colorScheme='teal' variant='outline'>
          Button
        </Button>
        <Button colorScheme='teal' variant='ghost'>
          Button
        </Button>
        <Button colorScheme='teal' variant='link'>
          Button
        </Button>
      </Stack>
      <Stack spacing='lg'>
        <Button isLoading colorScheme='orange' variant='solid'>
          Email
        </Button>
        <Button
          isLoading
          loadingText='Loading'
          colorScheme='orange'
          variant='outline'
          spinnerPlacement='start'
        >
          Submit
        </Button>
        <Button
          isLoading
          loadingText='Loading'
          colorScheme='orange'
          variant='outline'
          spinnerPlacement='end'
        >
          Continue
        </Button>
      </Stack>
      {/* <Stack spacing='lg'>
        <Button leftIcon={<EmailIcon />} colorScheme='red' variant='solid'>
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme='red'
          variant='outline'
        >
          Call us
        </Button>
      </Stack> */}
    </Stack>
  ),
};

export const ButtonIcon = {
  render: (args: ButtonProps) => (
    <Button
      isLoading
      loadingText='Loading'
      colorScheme='orange'
      variant='outline'
      spinnerPlacement='end'
    >
      ButtonIcon
    </Button>
    // <Stack>

    //   <IconButton aria-label='Search database' s='lg' icon={<SearchIcon />} />
    //   <IconButton
    //     colorScheme='blue'
    //     variant='solid'
    //     aria-label='Search database'
    //     s='lg'
    //     icon={<SearchIcon />}
    //   />
    //   <IconButton
    //     variant='outline'
    //     colorScheme='teal'
    //     aria-label='Send email'
    //     s='lg'
    //     icon={<EmailIcon />}
    //   />
    //   <IconButton
    //     colorScheme='teal'
    //     aria-label='Call Segun'
    //     s='lg'
    //     icon={<PhoneIcon />}
    //   />
    // </Stack>
  ),
};
