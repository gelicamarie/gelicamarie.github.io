import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useWindowWidth } from '@react-hook/window-size'

import SEO from '../components/Seo'
import Navbar from '../components/Navbar'
import Line from '../components/Line'
import Ellipse from '../components/Ellipse'

import About from '../components/About'

import './index.css'

const MobileName = () => (
  <div className="name">
    <Line className="line" />
    <h1>Angelica Turla</h1>
    <Line className="line" />
  </div>
)

const DesktopName = () => (
  <div className="name">

    <h1>
      Angelica Turla
      <Ellipse className="circle" />
    </h1>
    <Line className="line" />
    <h1>Personal Portfolio</h1>
  </div>
)

const Home = () => {
  const { file } = useStaticQuery<GatsbyTypes.HomepageQuery>( graphql`
  query Homepage {
    file(sourceInstanceName: {eq: "content"}, name: {eq: "collage"}) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: TRACED_SVG)
      }
    }
  }
  ` )
  const width = useWindowWidth()
  const Name = () => ( width < 769 ? <MobileName /> : <DesktopName /> )

  return (
    <>
      <SEO title="Home" />
      <Navbar />
      <main className="wrapper">
        <div className="mid-wrap">
          <div className="collage-wrapper">
            <GatsbyImage className="collage" alt="Collage" image={getImage( file )} />
          </div>
          <Name />
        </div>
      </main>

    </>
  )
}

export default Home

