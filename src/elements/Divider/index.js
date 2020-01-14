import React from 'react'
import PropTypes from 'prop-types'

const Divider = props => {
  const {
    children,
    vertical,
    horizontal,
    inverted,
    fitted,
    hidden,
    section,
    clearing,
    ...inheritedProps
  } = props

  let classes = 'ui divider'

  if (vertical) classes += ' vertical'
  if (horizontal) classes += ' horizontal'
  if (inverted) classes += ' inverted'
  if (fitted) classes += ' fitted'
  if (hidden) classes += ' hidden'
  if (section) classes += ' section'
  if (clearing) classes += ' clearing'

  return (
    <div className={classes} {...inheritedProps}>
      {children}
    </div>
  )
}

Divider.propTypes = {
  children: PropTypes.any,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  fitted: PropTypes.bool,
  hidden: PropTypes.bool,
  section: PropTypes.bool,
  clearing: PropTypes.bool,
  inverted: PropTypes.bool
}

export default Divider
