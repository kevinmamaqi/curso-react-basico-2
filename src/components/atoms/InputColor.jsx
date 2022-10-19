import React from 'react'

export const InputColor = ({ id, onChange, ...rest }) => {
  return <input type="color" id={id} name={id} onChange={onChange} {...rest} />
}
