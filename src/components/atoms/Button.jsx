import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const { spacing, borderRadius } = dimensions

const ButtonStyled = styled.button`
  background-color: ${colors.purple};
  color: white;
  border-radius: ${borderRadius.base};
  border: 0;
  padding: ${spacing.small} ${spacing.medium};
  box-shadow: ${colors.shadow.base};

  &:hover {
    cursor: pointer;
  }
`

const Button = ({ children, type = 'button', ...rest }) => {
  return (
    <ButtonStyled type={type} {...rest}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
}

const sButton = styled(Button)``
export { sButton as Button }
