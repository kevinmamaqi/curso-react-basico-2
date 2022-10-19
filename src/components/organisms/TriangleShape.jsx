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
}) => {
  const [triangleSize, setTriangleSize] = useState(initialSize)
  const [triangleColor, setTriangleColor] = useState(initialColor)
  return (
    <>
      <form>
        <InputNumberGroup
          id={idColor}
          label={labelSize}
          onChange={(e) => setTriangleSize(e.target.value)}
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
