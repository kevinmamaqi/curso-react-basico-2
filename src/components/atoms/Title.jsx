import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Title({ children, order = 1, color = colors.text.headings, ...rest }) {
  const Title = `h${order}`
  const headerSize = dimensions.font[Title]
  return (
    <Title style={{ color: color, fontSize: headerSize }} {...rest}>
      {children}
    </Title>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  order: function (props, propName, componentName) {
    if (props[propName] < 1 || props[propName] > 6) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. The order property should be between 1 and 6 -> [1, ...6].'
      )
    }
  },
}

const sTitle = styled(Title)``
export { sTitle as Title }
