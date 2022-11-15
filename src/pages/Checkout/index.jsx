import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import styled from 'styled-components'
import { FlexBox } from '../../components/atoms'
import { ShippingForm } from './ShippingForm'

const CheckoutStyled = styled(FlexBox)`
  background-color: #ffdebf;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
`

function CartSummary() {
  return 'cart summary'
}

function OrderSummary() {
  return 'order summary'
}

function ProceedToPayButton() {
  return 'proceed to pay button'
}

function Checkout() {
  const methods = useForm()

  return (
    <CheckoutStyled>
      <FormProvider {...methods}>
        <FlexBox as="form">
          <ShippingForm />
        </FlexBox>
      </FormProvider>
    </CheckoutStyled>
  )
}

export { Checkout }
