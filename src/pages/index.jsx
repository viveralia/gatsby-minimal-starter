import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

const index = () => {
  // Component JSX
  return (
    <Layout>
      <SEO localTitle="Home" />
      <h1>Hello from index</h1>
    </Layout>
  )
}

export default index
