import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useWindowWidth } from '@react-hook/window-size'

import SEO from '../components/Seo'
import Navbar from '../components/Navbar'
import Line from '../components/Line'
import Ellipse from '../components/Ellipse'

import About from '../components/About'
import Skills from '../components/Skills'

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
  const { collage, bkg } = useStaticQuery<GatsbyTypes.HomepageQuery>( graphql`
  query Homepage {
    collage: file(sourceInstanceName: {eq: "content"}, name: {eq: "collage"}) {
      childImageSharp {
        gatsbyImageData(quality: 100, placeholder: TRACED_SVG)
      }
    }
    bkg : file(sourceInstanceName: {eq: "content"}, name: {eq: "bkg"}) {
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
      <main>
        <div className="wrapper">
          <div className="mid-wrap">

            <GatsbyImage className="bkg" alt="blue image" image={getImage( bkg )} />
            <div className="collage-wrapper">
              <GatsbyImage className="collage" alt="Collage" image={getImage( collage )} />
            </div>

            <Name />
          </div>
        </div>
        <About />
        <Skills />
      </main>
    </>
  )
}

export default Home

