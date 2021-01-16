import React from 'react'
import { node, string } from 'prop-types'
import cx from 'classnames'

const Container = ( { children, className, ...props } ) => (
  <div className={cx( 'container mx-auto max-w-8xl px-2', className )} {...props}>
    {children}
  </div>
)

Container.propTypes = {
  children: node.isRequired,
  className: string,
}

Container.defaultProps = {
  className: undefined,
}

export default Container
