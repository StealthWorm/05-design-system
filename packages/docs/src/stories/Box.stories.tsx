import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ui-design-sys/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    // children como jsx
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
