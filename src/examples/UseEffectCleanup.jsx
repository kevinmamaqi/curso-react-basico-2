import React, { useEffect, useState } from 'react'

const Child = ({ counter }) => {
  useEffect(() => {
    window.addEventListener('click', () => console.log('he hecho click'))
  }, [counter])

  return <p>Child component = {counter}.</p>
}

export const Parent = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Child counter={counter} />
      <button onClick={() => setCounter((val) => val + 1)}>
        Counter: {counter}
      </button>
    </div>
  )
}
