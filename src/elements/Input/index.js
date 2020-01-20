import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
  const {
    children,
    focus,
    loading,
    disabled,
    error,
    icon,
    labeled,
    action,
    transparent,
    inverted,
    fluid,
    size,
    varient = '',
    ...inheritedProps
  } = props
  const classes = ['ui', 'input']

  if (focus) classes.push('focus')
  if (disabled) classes.push('disabled')
  if (error) classes.push('error')
  if (transparent) classes.push('transparent')
  if (inverted) classes.push('inverted')
  if (fluid) classes.push('fluid')
  if (size) classes.push(size)
  if (loading) {
    classes.push('loading')

    if (typeof loading === 'string') classes.push(loading)
  }
  if (icon) {
    classes.push('icon')

    if (typeof icon === 'string') classes.push(icon)
  }
  if (labeled) {
    classes.push('labeled')

    if (typeof labeled === 'string') classes.push(labeled)
  }
  if (action) {
    classes.push('action')

    if (typeof action === 'string') classes.push(action)
  }

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Input.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  focus: PropTypes.bool,
  loading: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  labeled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  transparent: PropTypes.bool,
  inverted: PropTypes.bool,
  fluid: PropTypes.bool,
  size: PropTypes.string
}

export default Input
