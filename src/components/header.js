import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  padding: 1.45rem 1rem;
  background: transparent;
`
const Logo = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
`
const NavStyles = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
  a {
    transition: 0.5s;
  }
  a:hover {
    color: ${props => props.theme.grey};
  }
`

const Header = ({ siteTitle }) => (
  <>
    <HeaderStyles>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <NavStyles>
        <Link to="/shop/">Shop</Link>
      </NavStyles>
      <NavStyles>
        <Link to="/subscription/">Subscription</Link>
      </NavStyles>
      <NavStyles>
        <Link to="/roastery/">Roastery</Link>
      </NavStyles>
      <NavStyles>
        <Link to="/ourstory/">Our Story</Link>
      </NavStyles>
      <NavStyles>
        <Link to="/findus/">Find Us</Link>
      </NavStyles>
    </HeaderStyles>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Coffee Mania',
}

export default Header
