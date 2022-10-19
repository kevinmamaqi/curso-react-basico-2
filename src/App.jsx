import { useState } from 'react'
import { Text, Title } from './components/atoms'
import { InputTextGroup } from './components/molecules/InputTextGroup'
import { colors } from './styles'

function App() {
  const [hola, setHola] = useState('')
  console.log(hola)
  return (
    <div>
      <Title order={3}>Traductor</Title>
      <Text>Bienvenido</Text>
      <Text color={colors.mainColor}>
        Escribe las siguientes palabras en tu idioma.
      </Text>
      <form>
        <InputTextGroup
          id="hola"
          label="Hola"
          onChange={(e) => setHola(e.target.value)}
          onBlur={() => {}}
          min="3"
          max="24"
        />
        <InputTextGroup label="Adios" id="adios" />
      </form>
    </div>
  )
}

export default App
