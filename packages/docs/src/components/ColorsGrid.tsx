import { colors } from '@ui-design-sys/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  // retorna um array de arrays, onde cada item do array é um array de chave/valor (key/color)
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            // getContrast vem da lib "polished" que permite pegar varias props de contraste de um objeto
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
