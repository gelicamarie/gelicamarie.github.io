import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from './Container'

const About = () => {
  const { markdownRemark: { html: data } } = useStaticQuery( graphql`
  query AboutSection {
    markdownRemark(frontmatter: {title: {eq: "About Section"}}) {
      id
      html
    }
  }
` )

  return (
    <div className="bg-theme-orange py-6 md:py-8">
      <Container>
        <p className="text-white font-semibold text-xl">
          Hi there! I'm Angelica, Gel for short.
          <br />
        </p>

        <p
          className="text-theme-black font-extralight leading-4 text-sm max-w-3xl"
          dangerouslySetInnerHTML={{ __html: data }}
        />

      </Container>
    </div>
  )
}

export default About
