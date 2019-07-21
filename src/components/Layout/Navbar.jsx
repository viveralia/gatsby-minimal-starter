import React from 'react'

import styled from 'styled-components'

const Navbar = ({ siteTitle }) => {
  // Component JSX
  return (
    <StyledNav>
      <p>{siteTitle}</p>
    </StyledNav>
  )
}

// Styles
const StyledNav = styled.nav``

export default Navbar
