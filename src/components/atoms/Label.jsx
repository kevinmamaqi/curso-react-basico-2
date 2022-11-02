import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types' // ES6
import { Text } from './Text'

export function Label({
  children,
  htmlFor,
  color = colors.text.body,
  size = dimensions.font.base,
}) {
  return (
    <Text as="label" htmlFor={htmlFor} color={color} size={size}>
      {children}
    </Text>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
}
