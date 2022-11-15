import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'
import { FlexBox } from '../../components/atoms'

const ShippingStyled = styled(FlexBox).attrs({
  align: 'center',
  justify: 'center',
})`
  background-color: ${({ selected }) => (selected ? 'lightgreen' : '#DDD')};
  padding: 2rem;
`

const ShippingFormStyled = styled(FlexBox)`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border: 1px solid #ddd;
  }
`

function ShippingForm() {
  const { register, setValue, watch } = useFormContext()

  const handleShippingMethod = (method) => {
    setValue('shippingMethod', method)
  }

  return (
    <ShippingFormStyled>
      <label htmlFor="name">Name</label>
      <input type="text" {...register('name')} />
      <FlexBox direction="row">
        <ShippingStyled
          selected={watch('shippingMethod') === 'fedex'}
          onClick={() => handleShippingMethod('fedex')}
        >
          FedEx
        </ShippingStyled>
        <ShippingStyled
          selected={watch('shippingMethod') === 'ups'}
          onClick={() => handleShippingMethod('ups')}
        >
          UPS
        </ShippingStyled>
      </FlexBox>
      <input type="hidden" {...register('shippingMethod')} />
    </ShippingFormStyled>
  )
}

export { ShippingForm }
