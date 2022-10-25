import PropTypes from 'prop-types'
import { Container } from '../atoms'
import { Footer } from './Footer'
import { Header } from './Header'
import { SubHeader } from './SubHeader'

export const Body = ({ children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}
