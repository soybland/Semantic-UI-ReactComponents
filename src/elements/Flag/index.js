import React from 'react'
import PropTypes from 'prop-types'

const Flag = props => {
  const { children, country = '', ...inheritedProps } = props

  return (
    <i className={`flag ${country}`} {...inheritedProps}>
      {children}
    </i>
  )
}

Flag.propTypes = {
  children: PropTypes.any,
  country: PropTypes.string.isRequired
}

export default Flag
