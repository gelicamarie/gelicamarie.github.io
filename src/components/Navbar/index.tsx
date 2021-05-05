import { useState, useEffect } from 'react'
import { Cross as Toggle } from 'hamburger-react'
import { Link } from 'gatsby'
import { useWindowWidth } from '@react-hook/window-size'
import { Transition } from 'react-transition-group'
import { motion } from 'framer-motion'

import './index.css'

const MENU = [
  { label: 'Artwork', to: '/artwork' },
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Work', to: '/#work' },
  { label: 'Contact', to: '/#contact' },
]

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

type NavItemProps = {
  isOpen: boolean;
  closeNav: () => void;
}

const NavItem = ( { isOpen, closeNav }:NavItemProps ) => (
  <Transition in={isOpen} timeout={duration}>
    {state => (
      <ul style={{
        ...defaultStyle,
        ...transitionStyles[ state ],
      }}
      >
        {MENU.map( ( { label, to } ) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={label}
          >
            <Link onClick={closeNav} to={to}>{label}</Link>
          </motion.li>
        ) )}
      </ul>
    )}
  </Transition>
)

const Navbar = () => {
  const [ isOpen, setOpen ] = useState( false )
  const width = useWindowWidth( { initialWidth: 1000 } )
  const isMobile = width < 768
  const closeNav = () => setOpen( false )
  const openNav = () => setOpen( true )

  useEffect( () => {
    if ( !isMobile && !isOpen ) {
      setOpen( true )
    }
  }, [ width ] )

  return (
    <nav>
      <div>
        <div>
          Angelica Turla
          <p>Ottawa, Canada</p>
        </div>
        {isMobile && <Toggle size={18} toggled={isOpen} toggle={() => setOpen( !isOpen )} />}
      </div>
      <NavItem closeNav={isMobile ? closeNav : openNav} isOpen={isOpen} />
    </nav>
  )
}

export default Navbar
