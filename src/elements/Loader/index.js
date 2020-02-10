import React from 'react'
import PropTypes from 'prop-types'

const Loader = props => {
  const {
    children,
    varient = '',
    text,
    indeterminate,
    active,
    disabled,
    inline,
    size,
    inverted,
    ...inheritedProps
  } = props
  const classes = ['ui', 'loader']

  if (text) classes.push('text')
  if (indeterminate) classes.push('indeterminate')
  if (active) classes.push('active')
  if (disabled) classes.push('disabled')
  if (inline) {
    if (typeof inline === 'string') {
      classes.push(inline)
    }
    classes.push('inline')
  }
  if (size) classes.push(size)
  if (inverted) classes.push('inverted')

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  text: PropTypes.bool,
  indeterminate: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  inline: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.string,
  inverted: PropTypes.bool
}

export default Loader
