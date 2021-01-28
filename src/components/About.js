import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from './Container'
import HTMLContent from './HTMLContent'

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
    <div className="bg-theme-orange-dark md:bg-theme-orange py-6 md:py-8">
      <Container>
        <p className="text-white font-semibold text-xl lg:text-3xl">
          Hi there! I&apos;m Angelica, Gel for short.
          <br />
        </p>

        <HTMLContent className="text-theme-black font-extralight leading-4 text-sm lg:text-lg max-w-5xl">
          {data}
        </HTMLContent>

      </Container>
    </div>
  )
}

export default About
