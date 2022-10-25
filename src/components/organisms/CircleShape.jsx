import { useState } from 'react'
import PropTypes from 'prop-types'
import { Circle } from '../atoms'
import { InputColorGroup, InputNumberGroup } from '../molecules'

export const CircleShape = ({
  initialSize = 120,
  initialColor = '#FF0000',
  idColor = 'circle-color',
  idNumber = 'circle-size',
  labelColor = 'Circle color',
  labelSize = 'Circle size',
  getSize,
}) => {
  const [circleSize, setCircleSize] = useState(initialSize)
  const [circleColor, setCircleColor] = useState(initialColor)

  const handleChange = (e) => {
    const { value } = e.target
    setCircleSize(value)
    if (getSize) {
      getSize(value)
    }
  }

  return (
    <>
      <form>
        <InputNumberGroup
          id={idNumber}
          label={labelSize}
          onChange={handleChange}
          min="30"
          max="200"
          defaultValue={circleSize}
        />
        <InputColorGroup
          id={idColor}
          label={labelColor}
          onChange={(e) => setCircleColor(e.target.value)}
          defaultValue={circleColor}
        />
      </form>
      <Circle size={circleSize} color={circleColor} />
    </>
  )
}

CircleShape.propTypes = {
  initialSize: PropTypes.number,
  initialColor: PropTypes.string,
  idColor: PropTypes.func,
  idNumber: PropTypes.string,
  labelColor: PropTypes.string,
  labelSize: PropTypes.func,
  getSize: PropTypes.func.isRequired,
}
