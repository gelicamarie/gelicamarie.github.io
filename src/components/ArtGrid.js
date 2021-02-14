import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ArtGrid = () => {
  const { allFile: allImageSharp } = useStaticQuery( graphql`
  query ArtSection {
    allFile(filter: {relativeDirectory: {eq: "art"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality:100, maxWidth:700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
` )

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {allImageSharp.edges.map( ( { node } ) => (
        <Img
          key={node.id}
          fluid={node.childImageSharp.fluid}
        />
      ) )}
    </div>
  )
}
export default ArtGrid
