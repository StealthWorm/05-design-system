import { TooltipTrigger } from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipProvider,
} from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children?: ReactNode
  content: string
}
export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <TooltipContainer>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        {/* <TooltipPortal> */}
        <TooltipContent sideOffset={2} side="top">
          {props.content}
          <TooltipArrow />
        </TooltipContent>
        {/* </TooltipPortal> */}
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
