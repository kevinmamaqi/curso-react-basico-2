import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '../atoms'
import { HouseCard } from '../molecules'

const getId = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const houseTypeIds = {
  1: 'piso',
  2: 'garaje',
  3: 'chalets',
}

const cityIds = {
  1: 'barcelona',
  2: 'madrid',
  3: 'zaragoza',
}

const houses = new Array(10).fill(undefined).map(() => ({
  city: cityIds[getId(1, 3)],
  type: houseTypeIds[getId(1, 3)],
  price: getId(60000, 1000000),
  surface: getId(60, 120),
}))

const byCity = (city, house) => (city ? city === house.city : true)
const byType = (type, house) => (type ? type === house.type : true)

const filterFn = (city, type) => (house) =>
  [byCity(city, house), byType(type, house)].every(Boolean)

console.log('houses', houses)
export const Houses = ({ city, type }) => {
  return (
    <Grid gridGap="32px">
      {houses.filter(filterFn(city, type)).map((_, i) => (
        <HouseCard
          key={i}
          title="Fantastica Casa en ..."
          price={`${_.price}€`}
          img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          link="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        />
      ))}
    </Grid>
  )
}

Houses.propTypes = {
  city: PropTypes.string,
  type: PropTypes.string,
}
