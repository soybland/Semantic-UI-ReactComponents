import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const {
    children,
    varient = '',
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
  const classes = ['ui', 'button']

  if (primary) classes.push('primary')
  if (secondary) classes.push('secondary')
  if (animated) {
    classes.push('animated')

    if (typeof animated === 'string') classes.push(animated)
  }
  if (labeled) classes.push('labeled')
  if (icon) classes.push('icon')
  if (basic) classes.push('basic')
  if (inverted) classes.push('inverted')
  if (disabled) classes.push('disabled')
  if (loading) classes.push('loading')

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <a className={classString} {...inheritedProps}>
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
