import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  containerProps?: ComponentProps<typeof TextInputContainer>
}

// "ref" é uma maneira do react acessar a referencia do elemnto na DOM (arvore de elementos), permitindo usar metodos como focus direto no input
// "ElementRef" extrai a tipagem de um outro componente
export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, containerProps, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer {...containerProps}>
        {/* "!!" é um sinal para tranformar um valor em uma checagem booleana */}
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
