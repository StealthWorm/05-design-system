import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastData,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
}

export function Toast(props: ToastProps) {
  return (
    <ToastProvider swipeDirection="right" duration={3000}>
      <ToastContainer open={props.open}>
        <ToastData>
          <ToastTitle>{props.title}</ToastTitle>
          <ToastDescription>{props.description}</ToastDescription>
        </ToastData>
        {/* <Toast.Action /> */}
        <ToastClose>
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
