import React from 'react'
import PropTypes from 'prop-types'

const Placeholder = props => {
  const {
    children,
    varient,
    inverted,
    active,
    fluid,
    ...inheritedProps
  } = props
  let classes = 'ui placeholder'

  if (inverted) classes += ' inverted'
  if (active) classes += ' active'
  if (fluid) classes += ' fluid'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps}>
      {children}
    </div>
  )
}

Placeholder.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  inverted: PropTypes.bool,
  active: PropTypes.bool,
  fluid: PropTypes.bool
}

export default Placeholder
