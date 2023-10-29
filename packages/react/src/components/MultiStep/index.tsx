import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      {/* para passar variaveis para dentro da estilização do stitches */}
      <Steps css={{ '--steps-size': size }}>
        {/* Array.from({ length: 4 }, (_, i) => i + 1)  vai gerar o array [1, 2, 3, 4] 
        o underline é o array em si, passamos dessa forma pois ele não sera usado, além de iniciar vazio
        */}
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step}></Step>
        })}
      </Steps>
    </MultiStepContainer>
  )
}
