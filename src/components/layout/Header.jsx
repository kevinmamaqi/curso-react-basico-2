import { Container, Text } from '../atoms'

export const Header = () => {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text>MIPISO.com.es</Text>
      <Text>Bienvenido Marcos</Text>
    </Container>
  )
}
