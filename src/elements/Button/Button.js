import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { children, varient, primary, secondary, ...inheritedProps } = props

  let classes = 'ui button'

  if (props.primary) classes += ' primary'
  if (props.secondary) classes += ' secondary'

  classes += ' ' + (varient || '')

  return (
    <a className={classes} {...inheritedProps} >{children}</a>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool
}

export default Button
