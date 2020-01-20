import React from 'react'
import PropTypes from 'prop-types'

const Subheader = props => {
  const {
    children,
    variant = '',
    ...inheritedProps
  } = props
  const classes = ['content']

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Subheader.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
}

export default Subheader
