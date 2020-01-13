import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const {
    children,
    varient,
    primary,
    secondary,
    animated,
    animation,
    labeled,
    icon,
    basic,
    inverted,
    disabled,
    loading,
    ...inheritedProps
  } = props

  let classes = 'ui button'

  if (primary) classes += ' primary'
  if (secondary) classes += ' secondary'
  if (animated) classes += ' animated'
  if (animated && typeof animation === 'string') classes += ` ${animation}`
  if (labeled) classes += ' labeled'
  if (icon) classes += ' icon'
  if (basic) classes += ' basic'
  if (inverted) classes += ' inverted'
  if (disabled) classes += ' disabled'
  if (loading) classes += ' loading'

  classes += ' ' + (varient || '')

  return (
    <a className={classes} {...inheritedProps}>
      {children}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  animated: PropTypes.bool,
  animation: PropTypes.string,
  labeled: PropTypes.bool,
  icon: PropTypes.bool,
  basic: PropTypes.bool,
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

export default Button
