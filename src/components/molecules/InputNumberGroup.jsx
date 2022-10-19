import React from 'react'
import { InputNumber, Label } from '../atoms'

export const InputNumberGroup = ({ label, id, onChange, ...rest }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputNumber id={id} name={id} onChange={onChange} {...rest} />
    </div>
  )
}
