import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { children, country = '', ...inheritedProps } = props

  return (
    <a className={`flag ${country}`} {...inheritedProps}>
      {children}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  country: PropTypes.string.isRequired
}

export default Button
