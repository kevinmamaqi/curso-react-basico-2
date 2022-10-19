import { Text, Title } from './components/atoms'
import { CircleShape, SquareShape, TriangleShape } from './components/organisms'
import { colors } from './styles'

function App() {
  return (
    <div>
      <Title order={3}>Traductor</Title>
      <Text>Bienvenido</Text>
      <Text color={colors.mainColor}>
        Escribe las siguientes palabras en tu idioma.
      </Text>
      <TriangleShape initialSize={50} />
      <CircleShape initialSize={90} />
      <SquareShape initialSize={130} />
    </div>
  )
}

export default App
