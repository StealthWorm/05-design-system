import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipContainer = styled(Tooltip.Root, {})
export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  padding: '$3 $4',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
  background: '$gray900',
  borderRadius: '$sm',
  color: '$gray100',
  textAlign: 'center',
  fontFamily: '$default',
  margin: 0,
  fontSize: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  margin: '$gray900',
})
