import Typist from 'react-typist'
import { useWindowWidth } from '@react-hook/window-size'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from 'react-scroll-motion'

import Link from '../Link'
import SEO from '../Seo'

import './index.css'

const MobileHeading = () => (
  <Typist avgTypingDelay={85}>
    <Typist.Delay ms={1700} />
    <span>  Computer <br />Programmer</span>
    <Typist.Backspace count={21} delay={400} />
    <span>Developer </span>
  </Typist>
)

const DesktopHeading = () => (
  <Typist avgTypingDelay={85}>
    <Typist.Delay ms={1700} />
    <span>Computer Programmer</span>
    <Typist.Backspace count={21} delay={400} />
    <span>Developer </span>
  </Typist>
)
const About = () => {
  const width = useWindowWidth()
  const Heading = () => ( width < 769 ? <MobileHeading /> : <DesktopHeading /> )
  return (
    <>
      <SEO title="About Me" />
      <main id="about" className="about">
        <ScrollContainer>
          <ScrollPage page={1}>
            <Animator animation={batch( Fade(), Sticky(), MoveOut( 0, -900 ) )}>
              <div className="container">

                <div className="heading">
                  <Heading />
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
                      to Python, Java, C/C++, JavaScript, and React. View more <Link to="/#skills">here</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </main>
    </>
  )
}
export default About
