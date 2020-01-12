import React from 'react'
import PropTypes from 'prop-types'

const ButtonGroup = props => {
  const { children, varient, ...inheritedProps } = props
  let classes = 'ui buttons'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default ButtonGroup
