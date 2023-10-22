import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

// define o tema dark do storybook, mas com a nova versão ele não atualiza o canvas
addons.setConfig({
  theme: themes.dark,
})