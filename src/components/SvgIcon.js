import React from 'react'
import cx from 'classnames'
import { string, node, number } from 'prop-types'

const SvgIcon = ( { url, svg: Svg, className, size, ...props } ) => (
  <a
    aria-label={url}
    href={url}
    target="_blank"
    rel="noreferrer"
    className={cx( 'text-theme-orange hover:text-gray-400', className )}
    {...props}
  >
    <Svg size={size} />
  </a>
)

SvgIcon.propTypes = {
  svg: node.isRequired,
  url: string.isRequired,
  className: string,
  size: number,
}

SvgIcon.defaultProps = {
  className: undefined,
  size: 18,
}

export default SvgIcon
