import styled from 'styled-components'

export const FlexBox = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-grow: ${({ grow }) => grow || 0};
  flex-wrap: ${({ flex }) => flex || 'no-wrap'};
  width: ${({ w }) => w || '100%'};
`
