import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ui-design-sys/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  // decorator é uma forma de customizar a "view" que mostra o elemento, adicionando outros elementos sem ser o componente em si
  decorators: [
    // o Story é uma função que vai renderizar o Input
    (Story) => {
      return (
        <Box
          as="label"
          // o stitches também permite passar a prop "css" que deixa adicionar novos estilos
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
