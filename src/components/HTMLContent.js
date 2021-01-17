import React from 'react'
import { string, node, oneOfType } from 'prop-types'

const HTMLContent = ( { children, className, ...props } ) => ( typeof children === 'string'
  ? <div className={className} dangerouslySetInnerHTML={{ __html: children }} {...props} />
  : <div className={className} {...props}>{children}</div> )

HTMLContent.propTypes = {
  className: string,
  children: oneOfType( [ node, string ] ).isRequired,
}

HTMLContent.defaultProps = {
  className: undefined,
}

export default HTMLContent
