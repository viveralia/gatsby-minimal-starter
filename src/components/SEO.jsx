import React from 'react'

import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

// Getting the Site Metadata
const getMeta = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteLang: lang
        siteUrl
        image
      }
    }
  }
`

const SEO = ({ localTitle, localDesc }) => {
  // Using the useStaticQuery React Hook and destructuring the data needed
  const response = useStaticQuery(getMeta)
  const {
    siteTitle,
    siteDesc,
    siteLang,
    siteUrl,
    image,
  } = response.site.siteMetadata

  // Component View
  return (
    <Helmet htmlAttributes={{ lang: siteLang }}>
      {/* If there are no local attributes provided, use the global (site) instead */}
      <title>{`${localTitle} | ${siteTitle}` || siteTitle}</title>
      <meta name="description" content={localDesc || siteDesc} />
      <meta name="image" content={image} />
      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${localTitle} | ${siteTitle}`} />
      <meta name="twitter:description" content={localDesc || siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      {/* Facebook Cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${localTitle} | ${siteTitle}`} />
      <meta property="og:description" content={localDesc || siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="250" />
    </Helmet>
  )
}

export default SEO
