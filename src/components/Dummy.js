import React from 'react'
import { string } from 'prop-types'

const Dummy = ( { label } ) => <p>{label}</p>

Dummy.propTypes = {
  label: string,
}

Dummy.defaultProps = {
  label: 'hi',
}

export default Dummy
