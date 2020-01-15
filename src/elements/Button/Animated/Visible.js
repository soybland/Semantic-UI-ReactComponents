import React from 'react'
import PropTypes from 'prop-types'

const VisibleContent = props => {
  const { children, varient = '', ...inheritedProps } = props

  const classes = ['visible', 'content']

  classes.push(...varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps} tabIndex={0}>
      {children}
    </div>
  )
}

VisibleContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default VisibleContent
