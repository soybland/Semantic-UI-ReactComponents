import React from 'react'
import PropTypes from 'prop-types'

const Loader = props => {
  const {
    children,
    varient = '',
    left,
    right,
    internal,
    dividing,
    attached,
    close,
    size,
    ...inheritedProps
  } = props
  const classes = ['ui', 'rail']

  if (left) classes.push('left')
  if (right) classes.push('right')
  if (internal) classes.push('internal')
  if (dividing) classes.push('dividing')
  if (attached) classes.push('attached')
  if (close) {
    if (typeof close === 'string') {
      classes.push(close)
    }
    classes.push('close')
  }
  if (size) classes.push('size')

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
  left: PropTypes.bool,
  right: PropTypes.bool,
  internal: PropTypes.bool,
  dividing: PropTypes.bool,
  attached: PropTypes.bool,
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.string
}

export default Loader
