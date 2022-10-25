import { Text } from '../atoms'

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text>MIPISO.com.es</Text>
      <Text>Bienvenido Marcos</Text>
    </div>
  )
}
