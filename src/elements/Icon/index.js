import React from 'react'
import PropTypes from 'prop-types'

const Icon = props => {
  const { type, ...inheritedProps } = props
  const iconClass = (type || '') + ' icon'

  return (
    <i className={iconClass} {...inheritedProps} />
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
