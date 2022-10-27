import React from 'react'
import { Icon } from '../components/atoms'
import { Body } from '../components/layout'
import { HouseCard } from '../components/molecules'

export const Home = () => {
  return (
    <Body>
      <Icon icon="search" />
      <div className="casas-en-venta">
        <HouseCard
          title="Fantastica Casa en ..."
          price="399.000€"
          img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          link="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        />
      </div>
      <div className="casas-en-venta">
        <HouseCard
          title="Fantastica Casa en ..."
          price="399.000€"
          img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          link="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          style={{ opacity: 0.5 }}
        />
      </div>
    </Body>
  )
}
