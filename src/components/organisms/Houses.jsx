import React from 'react'
import { Grid } from '../atoms'
import { HouseCard } from '../molecules'

const getId = (min, max) => {
  console.log('min', min)
  console.log('max', max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

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
  houseType: houseTypeIds[getId(1, 3)],
}))

export const Houses = () => {
  return (
    <Grid gridGap="32px">
      {houses.map((_, i) => (
        <HouseCard
          key={i}
          title="Fantastica Casa en ..."
          price="399.000€"
          img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          link="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        />
      ))}
    </Grid>
  )
}
