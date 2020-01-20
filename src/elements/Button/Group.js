import React from 'react'
import PropTypes from 'prop-types'

const ButtonGroup = props => {
  const { children, variant = '', ...inheritedProps } = props
  const classes = ['ui', 'buttons']

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
}

export default ButtonGroup
