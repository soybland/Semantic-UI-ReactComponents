import React from 'react'
import PropTypes from 'prop-types'

const HeaderContent = props => {
  const {
    children,
    varient = '',
    ...inheritedProps
  } = props
  const classes = ['content']

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

HeaderContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default HeaderContent
