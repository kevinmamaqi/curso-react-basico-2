import { useState } from 'react'
import { Text, Title, Triangle } from './components/atoms'
import { InputNumberGroup } from './components/molecules'
import { colors } from './styles'

function App() {
  const [triangleSize, setTriangleSize] = useState(50)
  return (
    <div>
      <Title order={3}>Traductor</Title>
      <Text>Bienvenido</Text>
      <Text color={colors.mainColor}>
        Escribe las siguientes palabras en tu idioma.
      </Text>
      <form>
        <InputNumberGroup
          id="triangle-size"
          label="Triangle size"
          onChange={(e) => setTriangleSize(e.target.value)}
          min="30"
          max="200"
        />
      </form>
      <Triangle size={triangleSize} />
    </div>
  )
}

export default App
