import React from 'react'

const initialWidth = 531.74
const initialHeight = 460.5

const getHeight = (size) => (size * initialHeight) / initialWidth

export const Triangle = ({ size = 100, color = '#FF0000' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      width={size}
      height={getHeight(size)}
      viewBox="0 0 531.74 460.5"
      overflow="visible"
      enableBackground="new 0 0 531.74 460.5"
      xmlSpace="preserve"
    >
      <polygon fill={color} points="0.866,460 265.87,1 530.874,460 " />
    </svg>
  )
}
