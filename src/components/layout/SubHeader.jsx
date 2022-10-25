import React from 'react'
import { colors } from '../../styles'
import { Container } from '../atoms'

export const SubHeader = () => {
  return (
    <Container
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.subHeader,
        marginBottom: '2rem',
      }}
    >
      SubHeader
    </Container>
  )
}
