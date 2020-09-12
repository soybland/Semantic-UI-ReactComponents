import React from 'react'
import PropTypes from 'prop-types'

const PlaceholderGroup = props => {
  const {
    children,
    variant = '',
    inverted,
    active,
    fluid,
    ...inheritedProps
  } = props
  const classes = ['ui', 'placeholder']

  if (inverted) classes.push('inverted')
  if (active) classes.push('active')
  if (fluid) classes.push('fluid')

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

PlaceholderGroup.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  inverted: PropTypes.bool,
  active: PropTypes.bool,
  fluid: PropTypes.bool
}

export default PlaceholderGroup
