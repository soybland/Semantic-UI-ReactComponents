import React from 'react'
import PropTypes from 'prop-types'

const ButtonGroup = props => {
  const { children, varient = '', ...inheritedProps } = props
  const classes = ['ui', 'buttons']

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default ButtonGroup
