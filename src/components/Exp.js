import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'

import Container from './Container'

const Heading = ( { label, className, ...props } ) => (
  <h2 className={cx( 'text-theme-orange text-lg', className )} {...props}>{label}</h2>
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
    <Heading className="text-theme-white" label={heading} />
    <p className="mb-2">{body}</p>
  </>
)

SectionItem.propTypes = {
  heading: string.isRequired,
  body: string.isRequired,
}

const Exp = () => (
  <Container>
    <div className="grid grid-cols-3 gap-4 my-4 text-theme-white text-xs font-extralight">

      <div>
        <Heading label="Experience" />
        <Heading className="text-theme-white" label="Technovation" />
        <p className="max-w-md">
          <span className="text-theme-orange">Lead Programmer</span>
          <br />
          Developed an application called Commnuity Companion using MIT App Inventor.
          The purpose of the app was to help immigrants and new comers integrate into the community more efficiently by providing
          an application that present a wide variety of oppurtunities such as: clubs, volunteering oppurtunities, and many more, to its users.
        </p>
      </div>

      <div>
        <Heading label="Education" />
        <SectionItem heading="Carleton University" body="Computer Science, Software Engineering" />
      </div>

      <div>
        <Heading label="Skills" />
        <SectionItem heading="Languages" body="JavaScript, Java, Python, C, CSS3, HTML5, Swift, Scratch" />
        <SectionItem heading="Frameworks" body="NodeJS, React, TailwindCSS, GatsbyJS" />
        <SectionItem heading="Data Stores" body="MongoDB, SQLite" />
        <SectionItem heading="Tools" body="Git, Github Actions, Linux, MacOS, Windows" />
      </div>

    </div>
  </Container>
)

export default Exp
