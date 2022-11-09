import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Body } from '../components/layout'
import { SubHeader } from '../components/layout/SubHeader'
import { Houses } from '../components/organisms'

export const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  const initialCity = searchParams.get('city') || ''
  const initialType = searchParams.get('type') || ''

  console.log('initialCity', initialCity)
  console.log('initialType', initialType)

  const [city, setCity] = useState(null)
  const [type, setType] = useState(null)
  return (
    <Body>
      <SubHeader setCity={setCity} setType={setType} />
      <Houses city={city} type={type} />
    </Body>
  )
}
