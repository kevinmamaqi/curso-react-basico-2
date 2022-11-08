import React from 'react'
import PropTypes from 'prop-types'
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

export const SubHeader = ({ setType, setCity }) => {
  return (
    <SubHeaderStyled align="center">
      <FlexBox direction="row" align="center">
        <SelectGroup
          id="house-type"
          label="Tipo"
          defaultText="Piso, chalet o garaje..."
          hideLabel
          onChange={(e) => setType(e.target.value)}
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
          onChange={(e) => setCity(e.target.value)}
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

SubHeader.propTypes = {
  setCity: PropTypes.func,
  setType: PropTypes.func,
}
