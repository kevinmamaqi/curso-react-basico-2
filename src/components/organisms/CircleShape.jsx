import React, { useState } from 'react'
import { Circle } from '../atoms'
import { InputColorGroup, InputNumberGroup } from '../molecules'

export const CircleShape = ({
  initialSize = 120,
  initialColor = '#FF0000',
  idColor = 'circle-color',
  idNumber = 'circle-size',
  labelColor = 'Circle color',
  labelSize = 'Circle size',
}) => {
  const [circleSize, setCircleSize] = useState(initialSize)
  const [circleColor, setCircleColor] = useState(initialColor)
  return (
    <>
      <form>
        <InputNumberGroup
          id={idColor}
          label={labelSize}
          onChange={(e) => setCircleSize(e.target.value)}
          min="30"
          max="200"
          defaultValue={circleSize}
        />
        <InputColorGroup
          id={idNumber}
          label={labelColor}
          onChange={(e) => setCircleColor(e.target.value)}
          defaultValue={circleColor}
        />
      </form>
      <Circle size={circleSize} color={circleColor} />
    </>
  )
}
