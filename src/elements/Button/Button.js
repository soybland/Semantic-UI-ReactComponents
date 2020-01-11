import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { children, ...inheritedProps } = props

  let classes = 'ui button'

  if (props.primary) classes += ' primary'
  if (props.secondary) classes += ' secondary'

  return (
    <button className={classes} {...inheritedProps} >{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.any
}

export default Button
