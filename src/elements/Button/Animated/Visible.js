import React from 'react'
import PropTypes from 'prop-types'

const VisibleContent = props => {
  const { children, varient, ...inheritedProps } = props

  let classes = 'visible content'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps} tabIndex={0}>
      {children}
    </div>
  )
}

VisibleContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default VisibleContent
