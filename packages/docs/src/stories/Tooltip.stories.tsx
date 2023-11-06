import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps, Text, Box } from '@ui-design-sys/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{ display: 'flex', padding: '$10', justifyContent: 'center' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const OverButton: StoryObj<TooltipProps> = {
  args: {
    content: 'Hi there Button!',
    children: <Button>Click here</Button>,
  },
}

export const OverText: StoryObj<TooltipProps> = {
  args: {
    content: 'Hi there Text!',
    children: (
      <Text css={{ width: 'max-content' }}>Text with Hint Tooltip</Text>
    ),
  },
}
