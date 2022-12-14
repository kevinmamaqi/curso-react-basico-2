import PropTypes from 'prop-types'
import { InputColor, Label } from '../atoms'

export const InputColorGroup = ({ label, id, onChange, ...rest }) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputColor id={id} name={id} onChange={onChange} {...rest} />
    </div>
  )
}

InputColorGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
