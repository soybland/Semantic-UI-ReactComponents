import React from 'react'
import PropTypes from 'prop-types'

const HeaderContent = props => {
  const {
    children,
    varient,
    ...inheritedProps
  } = props
  let classes = 'content'

  classes += ' ' + (varient || '')

  return (
    <div className={classes} {...inheritedProps}>
      {children}
    </div>
  )
}

HeaderContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default HeaderContent
