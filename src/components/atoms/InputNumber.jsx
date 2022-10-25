import PropTypes from 'prop-types'

export const InputNumber = ({ id, onChange, ...rest }) => {
  return <input type="number" id={id} name={id} onChange={onChange} {...rest} />
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
