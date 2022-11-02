import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import { Container, FlexBox } from '../atoms'
import { SelectGroup } from '../molecules'

const SubHeaderStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  background-color: ${colors.subHeader};

  ${SelectGroup} {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`

export const SubHeader = () => {
  return (
    <SubHeaderStyled align="center">
      <FlexBox direction="row" align="center">
        <SelectGroup
          id="house-type"
          label="Tipo"
          defaultText="Piso, chalet o garaje..."
          hideLabel
          options={[
            { value: 'piso', text: 'Piso' },
            { value: 'garaje', text: 'Garaje' },
            { value: 'chalets', text: 'Chalets' },
          ]}
        />
        <SelectGroup
          id="city"
          label="Ciudad"
          defaultText="Madrid, Barcelona o Zaragoza..."
          hideLabel
          options={[
            { value: 'barcelona', text: 'Barcelona' },
            { value: 'madrid', text: 'Madrid' },
            { value: 'zaragoza', text: 'Zaragoza' },
          ]}
        />
      </FlexBox>
    </SubHeaderStyled>
  )
}
