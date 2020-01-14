import React from 'react'
import PropTypes from 'prop-types'

const Subheader = props => {
  const {
    children,
    varient,
    ...inheritedProps
  } = props
  let classes = 'content'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps}>
      {children}
    </div>
  )
}

Subheader.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default Subheader
