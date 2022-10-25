import { useState } from 'react'
import PropTypes from 'prop-types'
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

TriangleShape.propTypes = {
  initialSize: PropTypes.number,
  initialColor: PropTypes.string,
  idColor: PropTypes.func,
  idNumber: PropTypes.string,
  labelColor: PropTypes.string,
  labelSize: PropTypes.func,
  getSize: PropTypes.func.isRequired,
}
