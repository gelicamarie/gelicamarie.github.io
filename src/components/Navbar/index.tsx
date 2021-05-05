import { useState } from 'react'
import type { HTMLAttributes, DetailedHTMLProps } from 'react'
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

type NavItemsProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>

const NavItems = ( { ...props }:NavItemsProps ) => (
  <ul {...props}>
    {MENU.map( ( { label, to } ) => (
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        key={label}
      >
        <Link to={to}>{label}</Link>
      </motion.li>
    ) )}
  </ul>
)

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

type MobileNavProps = {
  isOpen: boolean;
}

const MobileNav = ( { isOpen }:MobileNavProps ) => (
  <Transition in={isOpen} timeout={duration}>
    {state => (
      <NavItems style={{
        ...defaultStyle,
        ...transitionStyles[ state ],
      }}
      />
    )}
  </Transition>
)

const Navbar = () => {
  const [ isOpen, setOpen ] = useState( false )
  const width = useWindowWidth()
  const isMobile = width < 768

  const Items = () => ( isMobile ? <MobileNav isOpen={isOpen} /> : <NavItems /> )

  return (
    <nav>
      <div>
        <div>
          Angelica Turla
          <p>Ottawa, Canada</p>
        </div>
        {isMobile && <Toggle size={18} toggled={isOpen} toggle={() => setOpen( !isOpen )} />}
      </div>
      <Items />

    </nav>
  )
}

export default Navbar
