import { Link as GatsbyLink } from 'gatsby'
import { ReactNode } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

export type LinkProps = {

  to: string,
  children: ReactNode,
  className?: string,
}

const Link = ( { to, children, ...props }: LinkProps ) => (
  to.startsWith( 'http' ) || to.startsWith( 'mailto' )
    ? <OutboundLink href={to} target="_blank" rel="noreferrer" {...props}>{children}</OutboundLink>
    : <GatsbyLink to={to} {...props}>{children}</GatsbyLink>
)

export default Link
