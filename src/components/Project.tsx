import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Container from './Container'

const Heading = ( { label, className, ...props } ) => (
  <h2 className={cx( 'text-theme-black text-lg lg:text-2xl', className )} {...props}>{label}</h2>
)

Heading.propTypes = {
  label: string.isRequired,
  className: string,
}

Heading.defaultProps = {
  className: undefined,
}

const SectionItem = ( { heading, body } ) => (
  <>
    <Heading className="text-theme-black" label={heading} />
    <p className="mb-2">{body}</p>
  </>
)

SectionItem.propTypes = {
  heading: string.isRequired,
  body: string.isRequired,
}

const Project = () => {
  const { file: { childImageSharp } } = useStaticQuery( graphql`
  query ReelLogo {
    file(name: {eq: "reel"}) {
      id
      childImageSharp {
        fluid(quality: 100, maxWidth: 700, maxHeight: 350) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
  ` )

  return (
    <div className="bg-theme-orange h-100 text-theme-black py-6 md:py-8">
      <Container>
        <div className="grid grid-cols-3 gap-4 text-theme-black text-xs lg:text-base font-extralight">

          <div>
            <a href="https://github.com/gelicamarie/ReelMovies" target="_blank" rel="noreferrer noopener">
              <Heading className="text-theme-black hover:text-theme-white" label="Reel Movies" />
              <Img style={{ width: 200 }} fluid={childImageSharp.fluid} alt="Reel Logo" />
            </a>
            <p className="max-w-md text-theme-white py-2">
              Full Stack Web Application
            </p>
            <p className="max-w-md">
              A fullstack web application modeled similarly to the Internet Movie Database.
              Allow users to search, like, leave reviews, and add movies to the database.
              Built with ReactJS, TailwindCSS, NodeJS, and MongoDB.
            </p>
          </div>

        </div>
      </Container>
    </div>
  )
}
export default Project
