import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types' // ES6

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

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}
