import Link from '../Link'
import SEO from '../Seo'

import './index.css'

const CONTACTS = [
  { label: 'Linkedin', to: 'https://www.linkedin.com/in/angelica-turla/' },
  { label: 'Twitter', to: 'https://twitter.com/gxlica' },
  { label: 'Instagram', to: 'https://www.instagram.com/gelica.marie/' },
  { label: 'Email', to: 'mailto: turla_angelica@yahoo.com' },
]

const Contact = () => (
  <>
    <SEO title="Contact" />
    <main id="contact" className="contact">
      <div className="container">
        <div className="wrapper">
          <h1>Contact</h1>
          <div className="contacts-wrapper">
            <h2 className="disc">Discord
              <p className="hide">gel#9602</p>
            </h2>
            {CONTACTS.map( ( { label, to } ) => (
              <h2><Link to={to}>{label}</Link></h2>
            ) )}
          </div>
        </div>
      </div>
    </main>
  </>
)

export default Contact
