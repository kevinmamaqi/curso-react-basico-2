import React from 'react'

export const InputText = ({ id, onChange, ...rest }) => {
  return <input type="text" id={id} name={id} onChange={onChange} {...rest} />
}
