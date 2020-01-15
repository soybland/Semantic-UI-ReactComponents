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
    varient,
    inverted,
    ...inheritedProps
  } = props
  let classes = 'ui header'

  if (huge) classes += ' huge'
  if (large) classes += ' large'
  if (medium) classes += ' medium'
  if (small) classes += ' small'
  if (tiny) classes += ' tiny'
  if (icon) classes += ' icon'
  if (sub) classes += ' sub'
  if (center) classes += ' center'
  if (aligned) classes += ' aligned'
  if (disabled) classes += ' disabled'
  if (dividing) classes += ' dividing'
  if (block) classes += ' block'
  if (top) classes += ' top'
  if (bottom) classes += ' bottom'
  if (attached) classes += ' attached'
  if (right) classes += ' right'
  if (left) classes += ' left'
  if (floated) classes += ' floated'
  if (justified) classes += ' justified'
  if (inverted) classes += ' inverted'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps}>
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
  varient: PropTypes.string
}

export default Header
