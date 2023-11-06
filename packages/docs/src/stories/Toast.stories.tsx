import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ui-design-sys/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {},
  argTypes: {},
  decorators: [],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    open: true,
  },
}
