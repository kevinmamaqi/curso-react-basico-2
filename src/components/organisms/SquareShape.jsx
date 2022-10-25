import { useState } from 'react'
import PropTypes from 'prop-types'
import { Square } from '../atoms'
import { InputColorGroup, InputNumberGroup } from '../molecules'

export const SquareShape = ({
  initialSize = 120,
  initialColor = '#FF0000',
  idColor = 'square-color',
  idNumber = 'square-size',
  labelColor = 'Square color',
  labelSize = 'Square size',
  getSize,
}) => {
  const [squareSize, setSquareSize] = useState(initialSize)
  const [squareColor, setSquareColor] = useState(initialColor)

  const handleChange = (e) => {
    setSquareSize(e.target.value)
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
          defaultValue={squareSize}
        />
        <InputColorGroup
          id={idNumber}
          label={labelColor}
          onChange={(e) => setSquareColor(e.target.value)}
          defaultValue={squareColor}
        />
      </form>
      <Square size={squareSize} color={squareColor} />
    </>
  )
}

SquareShape.propTypes = {
  initialSize: PropTypes.number,
  initialColor: PropTypes.string,
  idColor: PropTypes.func,
  idNumber: PropTypes.string,
  labelColor: PropTypes.string,
  labelSize: PropTypes.func,
  getSize: PropTypes.func.isRequired,
}
