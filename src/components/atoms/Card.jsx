import PropTypes from 'prop-types'
import { dimensions, colors } from '../../styles'

export const Card = ({
  children,
  borderRadius = dimensions.borderRadius.base,
  boxShadow = colors.shadow.base,
  ...rest
}) => {
  return (
    <div
      style={{
        borderRadius,
        boxShadow,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  boxShadow: PropTypes.string,
  borderRadius: PropTypes.string,
}
