import React from 'react'
import PropTypes from 'prop-types'

const ImageGroup = props => {
  const { children, size, varient = '', ...inheritedProps } = props
  const classes = ['ui', 'images']

  if (size) classes.push(size)

  classes.push(varient.split(' '))

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
  varient: PropTypes.string
}

export default ImageGroup
