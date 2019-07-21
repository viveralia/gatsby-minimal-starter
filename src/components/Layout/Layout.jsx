import React from 'react'

import './Global.css'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'

// Getting the Site Name with GraphQL
const getSiteName = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => {
  // Using the useStaticQuery React Hook and destructuring the data needed
  const response = useStaticQuery(getSiteName)
  const { title } = response.site.siteMetadata

  // Component JSX
  return (
    <StyledLayout>
      <Navbar siteTitle={title} />
      {children}
      <Footer siteTitle={title} />
    </StyledLayout>
  )
}

// Styles
const StyledLayout = styled.main``

export default Layout
