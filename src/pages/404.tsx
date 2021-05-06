import { Link } from 'gatsby'
import SEO from '../components/Seo'
import Ooops from '../components/Ooops'
import './error.css'

const Redirect = () => (
  <>
    <SEO title="Ooops" />
    <main id="404">
      <div className="container">
        <h1>Page not found</h1>
        <Ooops />
        <h3><Link to="/">Home</Link></h3>
      </div>
    </main>

  </>
)
export default Redirect
