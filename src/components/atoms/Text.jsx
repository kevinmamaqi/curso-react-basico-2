import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types'
export function Text({
  children,
  color = colors.text.body,
  size = dimensions.font.base,
  ...rest
}) {
  return (
    <p style={{ color: color, fontSize: size }} {...rest}>
      {children}
    </p>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}
