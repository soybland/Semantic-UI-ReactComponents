import React from 'react'
import PropTypes from 'prop-types'

const Placeholder = props => {
  const {
    line,
    full,
    veryLong,
    long,
    medium,
    short,
    veryShort,
    square,
    image,
    rectangular,
    header,
    paragraph,
    children,
    varient = '',
    ...inheritedProps
  } = props
  const classes = []

  if (line) classes.push('line')
  if (full) classes.push('full')
  if (veryLong) classes.push('very long')
  if (long) classes.push('long')
  if (medium) classes.push('medium')
  if (short) classes.push('short')
  if (veryShort) classes.push('very short')
  if (square) classes.push('square')
  if (rectangular) classes.push('rectangular')
  if (image) classes.push('image')
  if (header) classes.push('header')
  if (paragraph) classes.push('paragraph')

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Placeholder.propTypes = {
  varient: PropTypes.string,
  line: PropTypes.bool,
  full: PropTypes.bool,
  veryLong: PropTypes.bool,
  long: PropTypes.bool,
  medium: PropTypes.bool,
  short: PropTypes.bool,
  veryShort: PropTypes.bool,
  square: PropTypes.bool,
  image: PropTypes.bool,
  rectangular: PropTypes.bool,
  header: PropTypes.bool,
  paragraph: PropTypes.bool,
  children: PropTypes.any
}

export default Placeholder
