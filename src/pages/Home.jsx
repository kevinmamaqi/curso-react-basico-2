import React, { useState } from 'react'
import { Body } from '../components/layout'
import { SubHeader } from '../components/layout/SubHeader'
import { Houses } from '../components/organisms'

export const Home = () => {
  const [city, setCity] = useState(null)
  const [type, setType] = useState(null)
  return (
    <Body>
      <SubHeader setCity={setCity} setType={setType} />
      <Houses city={city} type={type} />
    </Body>
  )
}
