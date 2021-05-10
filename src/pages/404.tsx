import Link from '../components/Link'
import SEO from '../components/Seo'
import Ooops from '../components/Ooops'
import './error.css'

const Redirect = () => (
  <>
    <SEO title="Ooops" />
    <main id="404" className="error">
      <div className="container">
        <div className="wrapper">
          <h1>Page not found</h1>
          <Ooops />
          <h3><Link to="/">Home</Link></h3>
        </div>
      </div>
    </main>

  </>
)
export default Redirect
