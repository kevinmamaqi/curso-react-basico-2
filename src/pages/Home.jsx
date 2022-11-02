import React from 'react'
import { Container, Icon, Text } from '../components/atoms'
import { Body } from '../components/layout'
import { Houses } from '../components/organisms'

export const Home = () => {
  return (
    <Body>
      <Icon icon="search" />
      <Container px="0" as="form">
        <Text>MI FORMULARIO!!!</Text>
      </Container>
      <Houses />
    </Body>
  )
}
