import React from 'react'
import PropTypes from 'prop-types'

const Container = props => {
  const {
    children,
    text,
    align,
    fluid,
    variant = '',
    ...inheritedProps
  } = props
  const classes = ['ui', 'container']

  if (text) classes.push('text')
  if (fluid) classes.push('fluid')
  if (align === 'justified') {
    classes.push('justified')
  } else {
    classes.push(align + ' aligned')
  }

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any,
  text: PropTypes.bool,
  align: PropTypes.string,
  fluid: PropTypes.bool,
  variant: PropTypes.string
}

export default Container
