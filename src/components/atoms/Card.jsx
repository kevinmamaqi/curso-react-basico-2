import PropTypes from 'prop-types'
import styled from 'styled-components'
import { dimensions, colors } from '../../styles'

const CardStyled = styled.div`
  /* display: flex;
  flex-direction: column; */
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
`

const Card = ({
  children,
  borderRadius = dimensions.borderRadius.base,
  boxShadow = colors.shadow.base,
  ...rest
}) => {
  return (
    <CardStyled borderRadius={borderRadius} boxShadow={boxShadow} {...rest}>
      {children}
    </CardStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  boxShadow: PropTypes.string,
  borderRadius: PropTypes.string,
}

const sCard = styled(Card)``
export { sCard as Card }
