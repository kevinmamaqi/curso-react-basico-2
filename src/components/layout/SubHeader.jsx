import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'
import { Container, FlexBox } from '../atoms'
import { SelectGroup } from '../molecules'
import { useSearchParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

const SubHeaderStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  background-color: ${colors.subHeader};
`

const FormStyled = styled(FlexBox).attrs({ as: 'form' })`
  ${SelectGroup} {
    &:first-of-type {
      margin-right: 1rem;
    }
  }
`

export const SubHeader = ({ setType, setCity }) => {
  const [searchParams] = useSearchParams()

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch('house-type')) // watch input value by passing the name of it

  return (
    <SubHeaderStyled align="center">
      <FormStyled
        direction="row"
        align="center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="house-type"
          control={control}
          rules={{ required: true }}
          defaultValue={searchParams.get('type') || undefined}
          render={({ field }) => {
            return (
              <SelectGroup
                id={field.name}
                label="Tipo"
                defaultText="Piso, chalet o garaje..."
                hideLabel
                onChange={field.onChange}
                value={field.value}
                options={[
                  { value: 'piso', text: 'Piso' },
                  { value: 'garaje', text: 'Garaje' },
                  { value: 'chalets', text: 'Chalets' },
                ]}
              />
            )
          }}
        />
        <Controller
          name="city"
          control={control}
          rules={{ required: true }}
          defaultValue={searchParams.get('city') || undefined}
          render={({ field }) => {
            return (
              <SelectGroup
                id={field.name}
                label="Ciudad"
                defaultText="Madrid, Barcelona o Zaragoza..."
                hideLabel
                onChange={field.onChange}
                options={[
                  { value: 'barcelona', text: 'Barcelona' },
                  { value: 'madrid', text: 'Madrid' },
                  { value: 'zaragoza', text: 'Zaragoza' },
                ]}
              />
            )
          }}
        />

        <button type="submit">Enviar</button>
      </FormStyled>
    </SubHeaderStyled>
  )
}

SubHeader.propTypes = {
  setCity: PropTypes.func,
  setType: PropTypes.func,
}
