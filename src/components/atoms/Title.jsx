import { colors, dimensions } from '../../styles'

export function Title({ children, order = 1, color = colors.text.headings }) {
  const Title = `h${order}`
  const headerSize = dimensions.font[Title]
  return (
    <Title style={{ color: color, fontSize: headerSize }}>{children}</Title>
  )
}
