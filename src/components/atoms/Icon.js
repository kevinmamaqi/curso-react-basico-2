import styled from 'styled-components'

export const Icon = styled.span.attrs(({ icon }) => ({
  children: icon,
  className: 'material-symbols-outlined',
}))`
  font-variation-settings: ${({ fill, wght, grad, opsz }) =>
    `'FILL' ${fill || 0}, 'wght' ${wght || 400}, 'GRAD' ${grad || 0}, 'opsz' ${
      opsz || 48
    }`};
`
