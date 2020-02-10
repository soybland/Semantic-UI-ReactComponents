import React from 'react'
import PropTypes from 'prop-types'

const LabelGroup = props => {
  const {
    children,
    varient = '',
    size,
    tag,
    circular,
    ...inheritedProps
  } = props
  const classes = ['ui', 'labels']

  if (size) classes.push(size)
  if (tag) classes.push('tag')
  if (circular) classes.push('circular')

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

LabelGroup.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.bool,
  circular: PropTypes.bool
}

export default LabelGroup
