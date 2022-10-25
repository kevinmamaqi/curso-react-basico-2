import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types'
export function Text({
  children,
  color = colors.text.body,
  size = dimensions.font.base,
}) {
  return <p style={{ color: color, fontSize: size }}>{children}</p>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}
