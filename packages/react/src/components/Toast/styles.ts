import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: '$8',
  right: '$8',
  overflow: 'hidden',
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(100%)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'grid',
  gridTemplateColumns: 'auto max-content',
  width: '100%',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  background: '$gray800',
  padding: '$4',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '$8',
  maxWidth: '360px',
  lineBreak: 'auto',
  overflowWrap: 'break-all',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-in-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-in-out`,
  },
})

export const ToastData = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$1',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: '$gray200',

  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',
  },
})
