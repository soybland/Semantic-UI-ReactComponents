import React from 'react'
import PropTypes from 'prop-types'

const ImageGroup = props => {
  const { children, size, variant = '', ...inheritedProps } = props
  const classes = ['ui', 'images']

  if (size) classes.push(size)

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

ImageGroup.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  variant: PropTypes.string
}

export default ImageGroup
