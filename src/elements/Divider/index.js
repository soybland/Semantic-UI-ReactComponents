import React from 'react'
import PropTypes from 'prop-types'

const Divider = props => {
  const {
    children,
    variant = '',
    vertical,
    horizontal,
    inverted,
    fitted,
    hidden,
    section,
    clearing,
    ...inheritedProps
  } = props
  const classes = ['ui', 'divider']

  if (vertical) classes.push('vertical')
  if (horizontal) classes.push('horizontal')
  if (inverted) classes.push('inverted')
  if (fitted) classes.push('fitted')
  if (hidden) classes.push('hidden')
  if (section) classes.push('section')
  if (clearing) classes.push('clearing')

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Divider.propTypes = {
  children: PropTypes.any,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  fitted: PropTypes.bool,
  hidden: PropTypes.bool,
  section: PropTypes.bool,
  clearing: PropTypes.bool,
  inverted: PropTypes.bool,
  variant: PropTypes.string
}

export default Divider
