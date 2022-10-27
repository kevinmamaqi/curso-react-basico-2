import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'
import { Card, Title, Text, Button, FlexBox } from '../atoms'

const HouseCardStyled = styled(Card)`
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${dimensions.borderRadius.base};
  }

  ${Title} {
    font-size: ${dimensions.font.base} !important;
    font-weight: normal;
  }
`

export const HouseCard = ({ title, link, price, img, ...rest }) => {
  return (
    <HouseCardStyled {...rest}>
      <img src={img} />
      <Title order={3} color={colors.text.body6}>
        {title}
      </Title>
      <FlexBox direction="row" justify="space-between" align="center">
        <Text style={{ fontWeight: 'bold' }}>{price}</Text>
        <Button href={link}>Localizar</Button>
      </FlexBox>
    </HouseCardStyled>
  )
}

HouseCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
