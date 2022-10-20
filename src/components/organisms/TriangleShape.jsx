import React, { useState } from 'react'
import { Triangle } from '../atoms'
import { InputColorGroup, InputNumberGroup } from '../molecules'

export const TriangleShape = ({
  initialSize = 120,
  initialColor = '#FF0000',
  idColor = 'triangle-color',
  idNumber = 'triangle-size',
  labelColor = 'Triangle color',
  labelSize = 'Triangle size',
  getSize,
}) => {
  const [triangleSize, setTriangleSize] = useState(initialSize)
  const [triangleColor, setTriangleColor] = useState(initialColor)

  const handleChange = (e) => {
    setTriangleSize(e.target.value)
    if (getSize) {
      getSize(e.target.value)
    }
  }
  return (
    <>
      <form>
        <InputNumberGroup
          id={idColor}
          label={labelSize}
          onChange={handleChange}
          min="30"
          max="200"
          defaultValue={triangleSize}
        />
        <InputColorGroup
          id={idNumber}
          label={labelColor}
          onChange={(e) => setTriangleColor(e.target.value)}
          defaultValue={triangleColor}
        />
      </form>
      <Triangle size={triangleSize} color={triangleColor} />
    </>
  )
}
