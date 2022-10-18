import { colors, dimensions } from '../../styles'

export function Text({
  children,
  color = colors.text.body,
  size = dimensions.font.base,
}) {
  return <p style={{ color: color, fontSize: size }}>{children}</p>
}
