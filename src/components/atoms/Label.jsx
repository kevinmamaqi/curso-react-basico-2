import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types' // ES6
import { Text } from './Text'
import styled from 'styled-components'

const LabelStyled = styled(Text)`
  display: ${({ hideLabel }) => (hideLabel ? 'none' : 'inline')};

  &.hide-element {
    border: 0;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`

export function Label({
  children,
  htmlFor,
  color = colors.text.body,
  size = dimensions.font.base,
  hideLabel,
}) {
  return (
    <LabelStyled
      as="label"
      htmlFor={htmlFor}
      color={color}
      size={size}
      className={hideLabel ? 'hide-element' : ''}
    >
      {children}
    </LabelStyled>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  hideLabel: PropTypes.bool,
}
