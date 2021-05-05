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

type NavItemsProps = {
  closeNav: () => void
} & DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>

const NavItems = ( { closeNav, ...props }:NavItemsProps ) => (
  <ul {...props}>
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
  closeNav: () => void;
}

const MobileNav = ( { isOpen, closeNav }:MobileNavProps ) => (
  <Transition in={isOpen} timeout={duration}>
    {state => (
      <NavItems
        style={{
          ...defaultStyle,
          ...transitionStyles[ state ],
        }}
        closeNav={closeNav}
      />
    )}
  </Transition>
)

const Navbar = () => {
  const [ isOpen, setOpen ] = useState( false )
  const width = useWindowWidth()
  const isMobile = width < 768
  const toggle = () => setOpen( !isOpen )
  const Items = () => ( isMobile
    ? <MobileNav closeNav={toggle} isOpen={isOpen} />
    : <NavItems closeNav={toggle} />
  )

  return (
    <nav>
      <div>
        <div>
          Angelica Turla
          <p>Ottawa, Canada</p>
        </div>
        {isMobile && <Toggle size={18} toggled={isOpen} toggle={toggle} />}
      </div>
      <Items />
    </nav>
  )
}

export default Navbar
