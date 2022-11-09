import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '../atoms'
import { HouseCard } from '../molecules'
import { useFetch } from '../hooks'

const byCity = (city, house) => (city ? city === house.city : true)
const byType = (type, house) => (type ? type === house.type : true)

const filterFn = (city, type) => (house) =>
  [byCity(city, house), byType(type, house)].every(Boolean)

const getUrl = (page) => `http://localhost:3001/pisos?_page=${page}&_limit=3`

export const Houses = ({ city, type }) => {
  const [houses, setHouses] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const { data, loading, isError, isSuccess, hasData } = useFetch(
    getUrl(currentPage)
  )

  useEffect(() => {
    if (!data) return
    setHouses((houses) => [...houses, ...data])
  }, [data])

  console.log(data?.length)

  return (
    <>
      {loading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <Grid gridGap="32px">
          {houses.filter(filterFn(city, type)).map((p, i) => (
            <HouseCard
              key={i}
              title={p.nombre}
              price={`${p.precio}€`}
              img={p.foto}
              link=""
            />
          ))}
        </Grid>
      )}
      {hasData && (
        <Button
          style={{ marginTop: '2rem' }}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Load more
        </Button>
      )}
    </>
  )
}

Houses.propTypes = {
  city: PropTypes.string,
  type: PropTypes.string,
}
