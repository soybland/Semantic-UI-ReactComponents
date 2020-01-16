import React from 'react'
import PropTypes from 'prop-types'

const Container = props => {
  const {
    children,
    text,
    align,
    fluid,
    varient = '',
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

  classes.push(varient.split(' '))

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
  varient: PropTypes.string
}

export default Container
