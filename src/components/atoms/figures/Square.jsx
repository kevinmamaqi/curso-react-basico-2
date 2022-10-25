import PropTypes from 'prop-types'

export const Square = ({ size = 100, color = '#FF0000' }) => {
  return (
    <svg width={size} height={size}>
      <rect width={size} height={size} fill={color} />
    </svg>
  )
}

Square.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}
