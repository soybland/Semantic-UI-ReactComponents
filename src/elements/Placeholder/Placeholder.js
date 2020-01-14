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
    varient,
    ...inheritedProps
  } = props
  let classes = ''

  if (line) classes += ' line'
  if (full) classes += ' full'
  if (veryLong) classes += ' very long'
  if (long) classes += ' long'
  if (medium) classes += ' medium'
  if (short) classes += ' short'
  if (veryShort) classes += ' very short'
  if (square) classes += ' square'
  if (rectangular) classes += ' rectangular'
  if (image) classes += ' image'
  if (header) classes += ' header'
  if (paragraph) classes += ' paragraph'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps}>
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
