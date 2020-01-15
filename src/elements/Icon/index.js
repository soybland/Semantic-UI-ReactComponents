import React from 'react'
import PropTypes from 'prop-types'

const Icon = props => {
  const { type = '', ...inheritedProps } = props

  return <i className={`${type} icon`} {...inheritedProps} />
}

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon
