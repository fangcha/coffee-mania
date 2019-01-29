import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeroWrapper = styled.section`
  width: 100%;
`
const Hero = () => (
  <HeroWrapper>
    <StaticQuery
      query={graphql`
        query {
          hero: file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.hero.childImageSharp.fluid} />}
    />
  </HeroWrapper>
)
export default Hero
