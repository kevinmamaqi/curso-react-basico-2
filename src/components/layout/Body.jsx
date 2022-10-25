import PropTypes from 'prop-types'
import { Footer } from './Footer'
import { Header } from './Header'
import { SubHeader } from './SubHeader'

export const Body = ({ children }) => {
  return (
    <>
      <Header />
      <SubHeader />
      {children}
      <Footer />
    </>
  )
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
}
