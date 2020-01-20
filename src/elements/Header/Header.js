import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const {
    children,
    huge,
    large,
    medium,
    small,
    tiny,
    icon,
    sub,
    center,
    aligned,
    disabled,
    dividing,
    block,
    top,
    bottom,
    attached,
    right,
    left,
    floated,
    justified,
    variant = '',
    inverted,
    ...inheritedProps
  } = props
  const classes = ['ui', 'header']

  if (huge) classes.push('huge')
  if (large) classes.push('large')
  if (medium) classes.push('medium')
  if (small) classes.push('small')
  if (tiny) classes.push('tiny')
  if (icon) classes.push('icon')
  if (sub) classes.push('sub')
  if (center) classes.push('center')
  if (aligned) classes.push('aligned')
  if (disabled) classes.push('disabled')
  if (dividing) classes.push('dividing')
  if (block) classes.push('block')
  if (top) classes.push('top')
  if (bottom) classes.push('bottom')
  if (attached) classes.push('attached')
  if (right) classes.push('right')
  if (left) classes.push('left')
  if (floated) classes.push('floated')
  if (justified) classes.push('justified')
  if (inverted) classes.push('inverted')

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.any,
  huge: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
  icon: PropTypes.bool,
  sub: PropTypes.bool,
  center: PropTypes.bool,
  aligned: PropTypes.bool,
  disabled: PropTypes.bool,
  dividing: PropTypes.bool,
  block: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  attached: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  floated: PropTypes.bool,
  justified: PropTypes.bool,
  inverted: PropTypes.bool,
  variant: PropTypes.string
}

export default Header
