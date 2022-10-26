import PropTypes from 'prop-types'
import { Card, Title, Text } from '../atoms'

export const HouseCard = ({ title, link, price, img, ...rest }) => {
  return (
    <Card {...rest}>
      <img src={img} />
      <Title>{title}</Title>
      <Text>{price}</Text>
      <button type="button" href={link}>
        Localizar
      </button>
    </Card>
  )
}

HouseCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
