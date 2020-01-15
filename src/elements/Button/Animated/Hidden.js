import React from 'react'
import PropTypes from 'prop-types'

const HiddenContent = props => {
  const { children, varient = '', ...inheritedProps } = props
  const classes = ['hidden', 'content']

  classes.push(...varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps} tabIndex={0}>
      {children}
    </div>
  )
}

HiddenContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default HiddenContent
