import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

export const Text = styled.p`
  color: ${({ color }) => color || colors.text.body};
  size: ${({ size }) => size || dimensions.font.base};
`
