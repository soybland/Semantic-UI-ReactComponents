import React from 'react'
import PropTypes from 'prop-types'

const ListItemHeader = props => {
  const { children, varient = '', ...inheritedProps } = props
  const classes = ['header']

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

ListItemHeader.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default ListItemHeader
