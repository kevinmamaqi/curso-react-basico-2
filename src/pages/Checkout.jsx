import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { FlexBox } from '../components/atoms'

const CheckoutStyled = styled(FlexBox)`
  background-color: #ffdebf;
  height: 100vh;
  width: 100vw;
`

function ShippingForm() {
  return 'shipping form'
}

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
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <CheckoutStyled>
      <FlexBox as="form" onSubmit={handleSubmit(onSubmit)}></FlexBox>
    </CheckoutStyled>
  )
}

export { Checkout }
