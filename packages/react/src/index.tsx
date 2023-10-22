import { ComponentProps } from 'react'
import { styled } from './styles'
import type * as Stitches from '@stitches/react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

// exportamos as props do componente para que possamos acessar no storybook sem ter que ficar adivinhando as mesmas
export type ButtonProps = ComponentProps<typeof Button>
// export type ButtonProps = Stitches.VariantProps<typeof Button>
