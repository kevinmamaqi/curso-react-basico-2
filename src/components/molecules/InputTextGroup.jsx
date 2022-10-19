import React from 'react'
import { InputText, Label } from '../atoms'

export const InputTextGroup = ({ label, id, onChange, ...rest }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputText type="text" id={id} name={id} onChange={onChange} {...rest} />
    </div>
  )
}
