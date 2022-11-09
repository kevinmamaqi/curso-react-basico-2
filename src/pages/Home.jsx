import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Body } from '../components/layout'
import { SubHeader } from '../components/layout/SubHeader'
import { Houses } from '../components/organisms'

const formatParmas = (params) => {
  const res = { ...params }
  for (const key in params) {
    if (!params[key]) {
      delete res[key]
    }
  }
  return res
}

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [city, setCity] = useState(searchParams.get('city') || undefined)
  const [type, setType] = useState(searchParams.get('type') || undefined)

  useEffect(() => {
    setSearchParams(formatParmas({ city, type }))
  }, [city, type])

  return (
    <Body>
      <SubHeader setCity={setCity} setType={setType} />
      <Houses city={city} type={type} />
    </Body>
  )
}
