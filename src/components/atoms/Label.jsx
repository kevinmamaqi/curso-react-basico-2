import { colors, dimensions } from '../../styles'

export function Label({
  children,
  htmlFor,
  color = colors.text.body,
  size = dimensions.font.base,
}) {
  return (
    <label htmlFor={htmlFor} style={{ color: color, fontSize: size }}>
      {children}
    </label>
  )
}
