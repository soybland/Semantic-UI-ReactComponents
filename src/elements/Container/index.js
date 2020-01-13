import React from 'react'
import PropTypes from 'prop-types'

const Container = props => {
  const { children, text, align, fluid, ...inheritedProps } = props

  let classes = 'ui container'

  if (text) classes += ' text'
  if (fluid) classes += ' fluid'
  if (align === 'justified') {
    classes += ' justified'
  } else {
    classes += ` ${align} aligned`
  }

  return (
    <div className={classes} {...inheritedProps}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  text: PropTypes.bool,
  align: PropTypes.string,
  fluid: PropTypes.bool
}

export default Container
