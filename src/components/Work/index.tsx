import Link from '../Link'
import SEO from '../Seo'

import './index.css'

const EXPERIENCES = [
  { label: 'Ambassadors Media', summary: 'Platform for content creators', to: 'https://ambassadors.media/' },
  { label: 'Side Projects', summary: 'School and personal side projects', to: '/work/#sideprojects' },
  { label: 'Technovation', summary: 'team tech-entrepreneurship competition', to: '/work/#technovation' },
]
const Work = () => (
  <>
    <SEO title="Work and Experience" />
    <main id="work" className="work">
      <div className="container">
        <div className="wrapper ">
          <h1>Works & Experiences</h1>
          <div className="projects-wrapper">
            {EXPERIENCES.map( ( { label, summary, to } ) => (
              <div className="projects">
                <h2><Link to={to}>{label}</Link></h2>
                <h4>{summary}</h4>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Work
