import React from 'react'
import { Grid } from '../atoms'
import { HouseCard } from '../molecules'

export const Houses = () => {
  return (
    <Grid gridGap="32px">
      {new Array(10).fill(undefined).map((_, i) => (
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
