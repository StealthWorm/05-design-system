import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ui-design-sys/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  /* themeMap é uma forma de mapear props css para algum tipo de token
     sobrescreve o defaultTheme definido no stitches (por exemplo, o que foi definido nos tokens de space seria sobrescrito)
   para evitar isso, basta mapear o "defaultThemeMap" dentro do themeMap, para ele entender que deve puxar o que ja foi definido somado às novas props
  */
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
