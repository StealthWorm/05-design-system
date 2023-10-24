// import type { Meta, StoryObj } from '@storybook/react'
// import { Button, ButtonProps } from '@ignite-ui/react'

//* para componentes é melhor usar typescript ao inves de markdown, por causa do intelisense
// export default {
//   title: 'Form/Button', //* titulo da pagina do story
//   component: Button, //* componente vinculado

//   args: {
//     children: 'Enviar',
//   },
// } as Meta<ButtonProps> //* o meta é uma tipagem para atribuição de props, apenas uma ajuda para o intelisesse poder localizar as props necessárias

//* o storybook exige que voce declare as variantes do componente, pelo menos uma "primary", para definir como padrão
// export const Primary: StoryObj<ButtonProps> = {}

// *  variante BIG do botão
// export const Big: StoryObj<ButtonProps> = {
//* cada info dentro do "args" é uma props que será enviada para o componente na tela do storybook
//   args: {
//     size: 'big',
//   },
// }
