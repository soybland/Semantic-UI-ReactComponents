import React from 'react'
import PropTypes from 'prop-types'

const Detail = props => {
  const {
    children,
    variant = '',
    size,
    tag,
    circular,
    ...inheritedProps
  } = props
  const classes = ['ui', 'labels']

  if (size) classes.push(size)
  if (tag) classes.push('tag')
  if (circular) classes.push('circular')

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Detail.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.bool,
  circular: PropTypes.bool,
  href: PropTypes.string
}

export default Detail
