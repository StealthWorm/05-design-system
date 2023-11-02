import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ui-design-sys/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/StealthWorm.png',
    alt: 'Thierry Pitela Santos',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
