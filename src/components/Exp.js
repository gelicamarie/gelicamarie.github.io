import React from 'react'
import { string } from 'prop-types'
import cx from 'classnames'

import Container from './Container'
import SKILLS from '../content/skills.json'

const Heading = ( { label, className, ...props } ) => (
  <h2 className={cx( 'text-theme-orange text-lg lg:text-2xl', className )} {...props}>{label}</h2>
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
    <div className="grid grid-cols-3 gap-4 py-6 md:py-8 text-theme-white text-xs lg:text-base font-extralight">

      <div>
        <Heading label="Experience" />
        <Heading className="text-theme-white" label="Technovation" />
        <p className="max-w-md">
          <span className="text-theme-orange">Lead Programmer</span>
          <br />
          Developed an application called Community Companion using MIT App Inventor.
          The purpose of the app was to help immigrants and new comers integrate into
          the community more efficiently by providing
          an application that present a wide variety of opportunities
          such as: clubs, volunteering opportunities, and many more, to its users.
        </p>
      </div>

      <div>
        <Heading label="Education" />
        <SectionItem heading="Carleton University" body="Computer Science, Software Engineering" />
      </div>

      <div>
        <Heading label="Skills" />
        {SKILLS.values.map( item => <SectionItem key={item.heading} {...item} /> )}
      </div>

    </div>
  </Container>
)

export default Exp
