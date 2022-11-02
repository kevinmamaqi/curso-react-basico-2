import React from 'react'
import { Container, Icon, Text } from '../components/atoms'
import { Body } from '../components/layout'
import { HouseCard } from '../components/molecules'

export const Home = () => {
  return (
    <Body>
      <Icon icon="search" />
      <Container px="0" as="form">
        <Text>MI FORMULARIO!!!</Text>
      </Container>
      <div className="casas-en-venta">
        <HouseCard
          title="Fantastica Casa en ..."
          price="399.000€"
          img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          link="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
        />
      </div>
    </Body>
  )
}
