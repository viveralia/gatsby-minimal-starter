import React from 'react'

import styled from 'styled-components'

const Footer = ({ siteTitle }) => {
  // Component JSX
  return (
    <StyledFooter>
      <p>&copy; {`${siteTitle}, ${new Date().getFullYear()}`}</p>
    </StyledFooter>
  )
}

// Styles
const StyledFooter = styled.footer``

export default Footer
