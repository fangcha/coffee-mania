import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'

const HeroStyle = {
  position: 'absolute',
  zIndex: -2,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero style={HeroStyle} />
  </Layout>
)

export default IndexPage
