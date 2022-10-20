import { useEffect, useState } from 'react'
import { Text, Title } from './components/atoms'
import { CircleShape, SquareShape, TriangleShape } from './components/organisms'
import { colors } from './styles'

function App() {
  const [tSize, setTSize] = useState(50)
  const [cSize, setCSize] = useState(90)
  const [sSize, setSSize] = useState(130)

  useEffect(() => {
    if (tSize === cSize && cSize === sSize) {
      alert('Todas las figuras tienen el mismo tamaño')
    }
  }, [tSize, cSize, sSize])

  return (
    <div style={{ height: '124234234vh' }}>
      <Title id="titulo-principal" order={3}>
        Traductor
      </Title>
      <Text>Bienvenido</Text>
      <Text color={colors.mainColor}>
        Escribe las siguientes palabras en tu idioma.
      </Text>
      <TriangleShape initialSize={50} getSize={(val) => setTSize(val)} />
      <CircleShape initialSize={90} getSize={(val) => setCSize(val)} />
      <SquareShape initialSize={130} getSize={(val) => setSSize(val)} />
    </div>
  )
}

export default App
