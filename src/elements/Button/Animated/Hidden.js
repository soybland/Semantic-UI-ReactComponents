import React from 'react'
import PropTypes from 'prop-types'

const HiddenContent = props => {
  const { children, variant = '', ...inheritedProps } = props
  const classes = ['hidden', 'content']

  classes.push(...variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps} tabIndex={0}>
      {children}
    </div>
  )
}

HiddenContent.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
}

export default HiddenContent
