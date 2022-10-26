import PropTypes from 'prop-types'

export const Icon = ({ icon, weight = 400, ...rest }) => {
  return (
    <span
      className="material-symbols-outlined"
      {...rest}
      style={{
        fontVariationSettings: `'FILL' 0,
    'wght' ${weight},
    'GRAD' 0,
    'opsz' 48`,
      }}
    >
      {icon}
    </span>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  weight: PropTypes.string,
}
