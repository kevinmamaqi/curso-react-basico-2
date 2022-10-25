import PropTypes from 'prop-types'

export const Container = ({ children, pl = 30, pr = 30, style, ...rest }) => {
  return (
    <div style={{ paddingLeft: pl, paddingRight: pr, ...style }} {...rest}>
      {children}
    </div>
  )
}

Container.propTypes = {
  pl: PropTypes.number,
  pr: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node,
}
