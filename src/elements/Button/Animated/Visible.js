import React from 'react'
import PropTypes from 'prop-types'

const VisibleContent = props => {
  const { children, variant = '', ...inheritedProps } = props

  const classes = ['visible', 'content']

  classes.push(...variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps} tabIndex={0}>
      {children}
    </div>
  )
}

VisibleContent.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
}

export default VisibleContent
