import React from 'react'
import PropTypes from 'prop-types'

export const InputColor = ({ id, onChange, ...rest }) => {
  return <input type="color" id={id} name={id} onChange={onChange} {...rest} />
}

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
