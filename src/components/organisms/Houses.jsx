import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../atoms'
import { HouseCard } from '../molecules'
import { useFetch } from '../hooks'

const byCity = (city, house) => (city ? city === house.city : true)
const byType = (type, house) => (type ? type === house.type : true)

const filterFn = (city, type) => (house) =>
  [byCity(city, house), byType(type, house)].every(Boolean)

const url = 'http://localhost:3001/pisos'

export const Houses = ({ city, type }) => {
  const { data, loading, isError, isSuccess } = useFetch(url)

  return (
    <>
      {loading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && (
        <Grid gridGap="32px">
          {data.filter(filterFn(city, type)).map((p, i) => (
            <HouseCard
              key={i}
              title={p.nombre}
              price={`${p.precio}€`}
              img={p.foto}
            />
          ))}
        </Grid>
      )}
    </>
  )
}

Houses.propTypes = {
  city: PropTypes.string,
  type: PropTypes.string,
}
