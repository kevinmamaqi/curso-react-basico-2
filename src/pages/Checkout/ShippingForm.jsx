import { useFormContext } from 'react-hook-form'

function ShippingForm() {
  const { register } = useFormContext()
  return <input type="text" {...register('name')} />
}

export { ShippingForm }
