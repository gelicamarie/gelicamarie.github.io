import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ArtGrid = () => {
  const { allImageSharp } = useStaticQuery( graphql`
    query ArtSection {
      allImageSharp {
        edges {
          node {
            id
            fluid(quality:100, maxWidth:700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
` )

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {allImageSharp.edges.map( ( { node } ) => <Img key={node.id} fluid={node.fluid} /> )}
    </div>
  )
}
export default ArtGrid
