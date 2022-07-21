import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../src'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '@vx-ui/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({
  children: 'Default Button',
})

export const Size = Template.bind({
  children: 'Size Button',
  s: 'lg',
})
