import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import { useWindowWidth } from '@react-hook/window-size'

import SEO from '../Seo'
import Ellipse from '../Ellipse'
import './index.css'

const TECHNICAL_SKILLS = [
  'UX/UI',
  'HTML/CSS',
  'JavaScript/TypeScript',
  'C / C++',
  'Java',
  'SQL',
  'Scheme',
  'Python',
  'Swift',
  'MongoDB',
  'SQLite',
  'Git',

]

const SOFT_SKILLS = [
  'Effective Communication Skills',
  'Self-organized and Independent',
  'Collaborative mindset',
  'Team Player',
  'Time Management for efficient work',
]

const FRAMEWORKS = [
  'NodeJS',
  'React',
  'TailwindCSS',
  'GatsbyJS',
]

const SKILLS_SECTIONS = [
  { label: 'Technical Skills', skills: TECHNICAL_SKILLS },
  { label: 'Soft Skills', skills: SOFT_SKILLS },
  { label: 'Frameworks', skills: FRAMEWORKS },
]

type TabsProps = {
  multiple: boolean
}

const Tabs = ( { multiple }:TabsProps ) => (
  <div className="tabs">
    <Accordion collapsible multiple={multiple}>
      {SKILLS_SECTIONS.map( ( { label, skills } ) => (
        <AccordionItem key={label}>
          <h3>
            <AccordionButton>{label}</AccordionButton>
          </h3>
          <AccordionPanel>
            <ul>
              {skills.map( skill => <li key={skill}>{skill}</li> )}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      ) )}
    </Accordion>
  </div>
)

const Skills = () => {
  const width = useWindowWidth()
  const [ isMultiple, setMultiple ] = useState( false )

  useEffect( () => {
    if ( width > 1199 ) {
      setMultiple( true )
    } else {
      setMultiple( false )
    }
  }, [ width ] )

  return (
    <>
      <SEO title="Skills" />
      <main id="skills" className=" skills">
        <div className="container">
          <div className="heading">
            <hr className="line" />
            <h1>Skills & frameworks
              <Ellipse className="circle" />
            </h1>
          </div>
          {isMultiple && <Tabs multiple /> }
          {!isMultiple && <Tabs /> }
        </div>
      </main>
    </>
  )
}
export default Skills
