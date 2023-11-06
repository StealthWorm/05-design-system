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
import { ComponentProps, useEffect, useState } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
}

export function Toast(props: ToastProps) {
  // const [visible, setVisible] = useState(props.open)

  // useEffect(() => {
  //   //   if (visible) {
  //   setVisible(props.open)

  //   // Set a timeout to close the toast after 3 seconds
  //   const closeTimeout = setTimeout(() => {
  //     setVisible(false)
  //   }, 3000)

  //   return () => {
  //     clearTimeout(closeTimeout)
  //   }
  //   //   }
  // }, [props.open])

  return (
    <ToastProvider swipeDirection="down">
      <ToastContainer open={props.open} duration={3000} role="listitem">
        <ToastData>
          <ToastTitle>{props.title}</ToastTitle>
          <ToastDescription>{props.description}</ToastDescription>
        </ToastData>
        {/* <Toast.Action /> */}
        <ToastClose aria-label="button close">
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
