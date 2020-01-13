import React from 'react'
import PropTypes from 'prop-types'

const HiddenContent = props => {
  const { children, varient, ...inheritedProps } = props

  let classes = 'hidden content'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps} tabIndex={0}>
      {children}
    </div>
  )
}

HiddenContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default HiddenContent
