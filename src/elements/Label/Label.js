import React from 'react'
import PropTypes from 'prop-types'

const Label = props => {
  const {
    children,
    variant = '',
    image,
    pointing,
    corner,
    tag,
    ribbon,
    attached,
    horizontal,
    floating,
    circular,
    empty,
    basic,
    size,
    href,
    ...inheritedProps
  } = props
  const classes = ['ui', 'label']

  let Component = 'div'

  if (image) classes.push('image')
  if (corner) classes.push(`${corner} corner`)
  if (tag) classes.push('tag')
  if (attached) classes.push(`${attached} attached`)
  if (horizontal) classes.push('horizontal')
  if (floating) classes.push('floating')
  if (circular) classes.push('circular')
  if (empty) classes.push('empty')
  if (basic) classes.push('basic')
  if (size) classes.push(size)

  if (pointing) {
    classes.push('pointing')

    if (typeof pointing === 'string') classes.push(pointing)
  }
  if (ribbon) {
    classes.push('ribbon')

    if (typeof ribbon === 'string') classes.push(ribbon)
  }

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  if (href) Component = 'a'

  return (
    <Component className={classString} href={href} {...inheritedProps}>
      {children}
    </Component>
  )
}

Label.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  image: PropTypes.bool,
  pointing: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  corner: PropTypes.string,
  tag: PropTypes.bool,
  ribbon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  attached: PropTypes.string,
  horizontal: PropTypes.bool,
  floating: PropTypes.bool,
  circular: PropTypes.bool,
  empty: PropTypes.bool,
  basic: PropTypes.bool,
  size: PropTypes.string,
  href: PropTypes.string
}

export default Label
