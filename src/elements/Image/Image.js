import React from 'react'
import PropTypes from 'prop-types'

const Image = props => {
  const {
    children,
    src = null,
    href = null,
    alt = null,
    hidden,
    disabled,
    avatar,
    bordered,
    fluid,
    rounded,
    circular,
    aligned,
    centered,
    spaced,
    floated,
    size,
    varient = '',
    ...inheritedProps
  } = props
  const classes = ['ui', 'image']

  let Component = 'div'

  if (typeof src === 'string') {
    Component = 'img'
  } else if (typeof href === 'string') {
    Component = 'a'
  }

  if (hidden) classes.push('hidden')
  if (disabled) classes.push('disabled')
  if (avatar) classes.push('avatar')
  if (bordered) classes.push('bordered')
  if (fluid) classes.push('fluid')
  if (rounded) classes.push('rounded')
  if (circular) classes.push('circular')
  if (aligned) classes.push(`${aligned} aligned`)
  if (centered) classes.push('centered')
  if (spaced) classes.push('spaced')
  if (floated) classes.push(`${floated} floated`)
  if (size) classes.push(size)

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <Component
      className={classString}
      src={src}
      href={href}
      alt={alt}
      {...inheritedProps}
    >
      {children}
    </Component>
  )
}

Image.propTypes = {
  children: PropTypes.any,
  src: PropTypes.string,
  href: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  varient: PropTypes.bool,
  avatar: PropTypes.bool,
  bordered: PropTypes.bool,
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  circular: PropTypes.bool,
  aligned: PropTypes.string,
  centered: PropTypes.bool,
  spaced: PropTypes.bool,
  floated: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string
}

export default Image
