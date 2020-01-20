import React from 'react'
import PropTypes from 'prop-types'

const Divider = props => {
  const {
    children,
    varient = '',
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

  classes.push(varient.split(' '))

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
  varient: PropTypes.string
}

export default Divider
