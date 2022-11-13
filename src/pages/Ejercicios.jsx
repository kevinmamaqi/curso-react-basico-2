import { useEffect, useState } from 'react'
import { Title } from '../components/atoms'
import {
  CircleShape,
  SquareShape,
  TriangleShape,
} from '../components/organisms'

export function Ejercicios() {
  const [tSize, setTSize] = useState('50')
  const [cSize, setCSize] = useState('90')
  const [sSize, setSSize] = useState('130')

  useEffect(() => {
    if (tSize === cSize && cSize === sSize) {
      alert('Todas las figuras tienen el mismo tamaño')
    }
  }, [tSize, cSize, sSize])

  return (
    <div style={{ height: '124234234vh', padding: '2rem' }}>
      <Title id="titulo-principal" order={3}>
        Ejercicio useState y useEffect.
      </Title>
      <TriangleShape initialSize={tSize} getSize={(val) => setTSize(val)} />
      <CircleShape initialSize={cSize} getSize={(val) => setCSize(val)} />
      <SquareShape initialSize={sSize} getSize={(val) => setSSize(val)} />
    </div>
  )
}
