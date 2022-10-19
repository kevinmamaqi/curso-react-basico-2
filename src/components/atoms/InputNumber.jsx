export const InputNumber = ({ id, onChange, ...rest }) => {
  return <input type="number" id={id} name={id} onChange={onChange} {...rest} />
}
