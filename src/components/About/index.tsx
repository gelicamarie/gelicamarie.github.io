import SEO from '../Seo'
import Ellipse from '../Ellipse'

import './index.css'

const About = () => (
  <>
    <SEO title="About Me" />
    <main id="about" className="container about">
      <div className="heading">
        <h2>
          Computer Programmer
        </h2>
        <Ellipse className="circle" />

      </div>

      <div className="grid-container">
        <div>
          <h4>Hello, <br />
            I’m Angelica Turla
          </h4>
          <p>
            I am currently on my 2nd year of Computer Science at Carleton University.
            <br />
            <br />
          </p>
        </div>

        <div>
          <p>
            Still finding my footing in the vast world of technology and so I always
            keep an open mind when it comes to learning new things.
            <br />
            <br />
            I work on a variety of technologies and frameworks including but not limited
            to Python, Java, C/C++, JavaScript, React, and more.
          </p>
        </div>
      </div>

    </main>
  </>
)
export default About
