import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useWindowWidth } from '@react-hook/window-size'

import SEO from '../components/Seo'
import Navbar from '../components/Navbar'
import Ellipse from '../components/Ellipse'

import About from '../components/About'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import './index.css'

const MobileName = () => (
  <div className="name">
    <hr className="line" />
    <h1>Angelica Turla</h1>
    <hr className="line" />
  </div>
)

const DesktopName = () => (
  <div className="name">

    <h1>
      Angelica Turla
      <Ellipse className="circle" />
    </h1>
    <hr className="line" />
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
          <GatsbyImage className="bkg" alt="blue image" image={getImage( bkg )} />

          <div className="collage-wrapper">
            <GatsbyImage className="collage" alt="Collage" image={getImage( collage )} />
          </div>

          <Name />

        </div>
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default Home

